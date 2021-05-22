
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
// FETCH PARAGRAPH

async function catchPar(p){
  const response = await fetch(p);
  const blob = await response.blob();
  //console.log(blob);
  document.querySelector('.portfolio-item-individual').innerHTML = await blob.text();
};
catchPar('project_desc1.html');

