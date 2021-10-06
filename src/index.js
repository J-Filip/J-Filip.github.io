
// seletctors //

const navToggle = document.querySelector('.nav-toggle');    // here we have dot
const navLinks = document.querySelectorAll(".nav__link")    // node list

// event listeners //

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open'); // here we make new class so no dot
});   // when defined class clicked, function creates this class

navLinks.forEach (link =>(
  link.addEventListener('click', () => {
  document.body.classList.remove("nav-open");
})
));


