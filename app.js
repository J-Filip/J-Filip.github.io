// Selectors
const todoInput=document.querySelector('.todo-input');
const todoButton=document.querySelector('.todo-button');
const todoList=document.querySelector('.todo-list');

/// Event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck)

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
      todo.addEventListener('transitionend', function(){       // Do something with element when a CSS transition has ended:
        todo.remove()
      })
    }
    if(clickedItem.classList[0] === "complete-button"){
      const todo = clickedItem.parentElement;
      todo.classList.toggle('completed');     // toggle to another class when clicked so that we can add new css
    }
}

/*
    listen delete
      delete todo
    listen check
      color
    listen todo
      zoom and expand
*/
