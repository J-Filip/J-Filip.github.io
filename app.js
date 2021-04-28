// Selectors
const todoInput=document.querySelector('.todo-input');
const todoButton=document.querySelector('.todo-button');
const todoList=document.querySelector('.todo-list');
const filterTodo = document.querySelector('.filter-todo')

/// Event listeners
document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterTodo.addEventListener("click",filterOptions);

/// Functions
function addTodo(event) {
  // prevent form from submitting
  event.preventDefault();
  //todo div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add("todo");
  //create li
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item')  //for css
  todoDiv.appendChild(newTodo);
  // add todo to local storage
  saveLocalTodos(todoInput.value);
  // check button
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="far fa-check-square"></i>';
  completedButton.classList.add('complete-button');
  todoDiv.appendChild(completedButton);
  // delete button
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
  trashButton.classList.add('trash-button');
  todoDiv.appendChild(trashButton);
  //append to div todo-container
  todoList.appendChild(todoDiv)
  // clear input value
  todoInput.value=""
}
  function deleteCheck(event) {
    const clickedItem = event.target
    // delete // TODO
    if(clickedItem.classList[0] === "trash-button"){
      const todo = clickedItem.parentElement;
      // animation
      todo.classList.add('fall')    // add another class when clicked so that we can add new css
      removeLocaltodos(todo);
      todo.addEventListener('transitionend', function(){       // Do something with element when a CSS transition has ended:
        todo.remove()
      })
    }
    if(clickedItem.classList[0] === "complete-button"){
      const todo = clickedItem.parentElement;
      todo.classList.toggle('completed');     // toggle to another class when clicked so that we can add new css
    }
}
// we are going through child nodes in select and when option is clicked, it matches expression to case. So if all is clicked - display all todo. If completed - check for todo items with class completed and so on.
function filterOptions(event) {
  const todos = todoList.childNodes;
  todos.forEach(function(todo){
    switch (event.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if(todo.classList.contains("completed")){
          todo.style.display = "flex";
        } else{
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if(!todo.classList.contains("completed")){
          todo.style.display = "flex";
       }else{
         todo.style.display = "none";
        }
        break;
    }
  });
}
//
function saveLocalTodos(todo) {
  // check if alreday have todos in local
  let todos;
  if(localStorage.getItem("todos") === null){
    // if no todos, create empty array
    todos = [];
  }else{
    // if todos, get todos from localStorage
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  // push new todo to array
  todos.push(todo);
  // set todos to local storage
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  console.log('DOM fully loaded and parsed');
  let todos;
  // check if alreday habe todos in local
  if(localStorage.getItem("todos") === null){
    // if no todos, create empty array
    todos = [];
  }else{
    // if todos, get todos from localStorage
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function(todo){
    console.log(todo);
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //create li
    const newTodo = document.createElement('li');
    // add todo from local storage
    newTodo.innerText = todo;
    newTodo.classList.add('todo-item')  //for css
    todoDiv.appendChild(newTodo)
    // check button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="far fa-check-square"></i>';
    completedButton.classList.add('complete-button');
    todoDiv.appendChild(completedButton);
    // delete button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    trashButton.classList.add('trash-button');
    todoDiv.appendChild(trashButton);
    //append to div todo-container
    todoList.appendChild(todoDiv);
  });
}

function removeLocaltodos(todo) {
  let todos;
  if(localStorage.getItem("todos") === null){
    // if no todos, create empty array
    todos = [];
  }else{
    // if todos, get todos from localStorage
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoIndex = todo.children[0].innerText;
  //console.log(todo.innerText);
  //console.log(todos.indexOf(todoIndex));
  todos.splice(todos.indexOf(todoIndex), 1);     // start splice from todoIndex - and delete 1
  localStorage.setItem("todos", JSON.stringify(todos));
}
