// CREATE INPUTS //
// CREATE BUTTON 3 - FUNCTION
// best one for now
let createHello = function (id, value) {
    var formHello = document.querySelector('.form-list_hello');
    var newElement = document.createElement('INPUT');

    newElement.setAttribute('type', 'radio');
    newElement.setAttribute('class', 'mail-options');
    newElement.setAttribute('name', 'mail-hello');
    // newElement.setAttribute('checked', true); // this or add placeholder 
    newElement.setAttribute('id', id);
    newElement.setAttribute('value', value);
    formHello.appendChild(newElement);

    var newLabel = document.createElement('LABEL');
    newLabel.setAttribute('for', id);
    newLabel.setAttribute('value', value);
    newLabel.innerText = (id);
    formHello.appendChild(newLabel);
};

createHello('Gdin', 'Poštovani gospodine\n\n');
createHello('Gdja', 'Poštovana gospođo\n\n');
// create content inputs
let createAnswer = function (id, value) {
    var formAnswer = document.querySelector('.form-list_answer');
    var newElement = document.createElement('INPUT');

    newElement.setAttribute('type', 'checkbox');
    newElement.setAttribute('class', 'mail-options');
    newElement.setAttribute('name', 'mail');
    newElement.setAttribute('id', id);
    newElement.setAttribute('value', value);
    formAnswer.appendChild(newElement);

    var newLabel = document.createElement('LABEL');
    newLabel.setAttribute('for', id);
    newLabel.setAttribute('value', value);
    newLabel.innerText = (id);
    formAnswer.appendChild(newLabel);
};
createAnswer('zahvala', 'zahvaljujemo na poslanim podacima.');
createAnswer('proslijeđeno', 'Vaš upit proslijeđen je nadležnoj službi.');
// create bye inputs
let createBye = function (id, value) {
    var formBye = document.querySelector('.form-list_bye');
    var newElement = document.createElement('INPUT');

    newElement.setAttribute('type', 'radio');
    newElement.setAttribute('class', 'mail-options');
    newElement.setAttribute('name', 'mail-bye');
    newElement.setAttribute('id', id);
    newElement.setAttribute('value', value);
    formBye.appendChild(newElement);

    var newLabel = document.createElement('LABEL');
    newLabel.setAttribute('for', id);
    newLabel.setAttribute('value', value);
    newLabel.innerText = (id);
    formBye.appendChild(newLabel);
};
createBye('za sve ostale', '\n\nZa sve ostale upite stojimo na raspolaganju.');
createBye('lijep pozdrav', '\n\nLijep pozdrav.');

// loop all inputs, get checked values and push them to array
function getInputValue() {
    var inputs = document.getElementsByClassName('mail-options');
    var inputsChecked = [];
    // loop all
    for (each of inputs) {
        if (each.checked) {
            inputsChecked.push(each.value);
        }
    }
    // removes commas between elements
    document.getElementById("mejlomlat").value = inputsChecked.join(' ');
}
// when input clicked
let inputs = document.getElementsByClassName('mail-options');
for (each of inputs) {
    each.addEventListener('click', function () {
        getInputValue();
    })
};

// EVENT LISTENERS

// when editbox focused
const mejloMlat = document.querySelector('.editbox1');
mejloMlat.addEventListener('focus', function () {
    mejloMlat.classList.add('changeEditBox');
});
mejloMlat.addEventListener('blur', function () {
    mejloMlat.classList.remove('changeEditBox');
});


// DATA AND API


//   1. call fetch with some path (here its logo) - fetch is asynchronus which means it takes some time
//   2. we get response - a stream of data 
//   3. then grab data from response body - a blob
// * read about: promise, async/await, .then

// create img
var newElement = document.createElement('IMG');
newElement.setAttribute('class', "fetched-div_logo");
newElement.setAttribute('width', "80px");
// select div and append to div 
var fetchedDiv = document.querySelector('.fetched-div');
fetchedDiv.appendChild(newElement);
// create par
var newElement = document.createElement('P');
newElement.setAttribute('class', "fetched-div_par");
fetchedDiv.appendChild(newElement);


// // fetching 1 with .then
// let fetchImg = function (img) {
//     fetch(img).then(response => {
//         //console.log(response);
//         return response.blob();
//     }).then(blob => {
//         document.querySelector('.fetched-img').src = URL.createObjectURL(blob);
//     })
//         .catch(error => {
//             console.error(error);
//         });
// };
// fetchImg('logo.png');

// fetching 2 with async/await

// fetching 2 async/await
// async function catchImg(img){
//     const response = await fetch(img);
//     const blob = await response.blob();
//     document.querySelector('.fetched-div_logo').src = URL.createObjectURL(blob);
// };
// catchImg('logo2.png');


async function catchPar(p){
    const response = await fetch(p);
    const blob = await response.blob();
    console.log(blob);
    document.querySelector('.fetched-div_par').innerHTML = await blob.text();
};
catchPar('neki.txt');



// exercise 
// fetch:
// - pictures for resume
// - paragraps for resume










