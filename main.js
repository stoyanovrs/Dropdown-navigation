let menuButton = document.querySelector('.nav-toggle');
let mainMenu = document.querySelector('.main-nav');
let darkLear = document.querySelector('.darker');

menuButton.addEventListener('click', () => {
  mainMenu.classList.toggle('open');
  menuButton.classList.toggle('opened');
  darkLear.classList.toggle('display');
})


let dropToggle = document.querySelectorAll('.drop');
let dropMenu = document.querySelector('.drop ul');

function dropMenuFunction(e) {
  e.target.classList.toggle("droped");
}

dropToggle.forEach(drop => drop.addEventListener('click', dropMenuFunction));