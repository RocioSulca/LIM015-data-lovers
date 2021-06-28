import { example } from './data.js';
import athletes from './data/athletes/athletes.js';
// import data from './data/lol/lol.js';

// import data from './data/rickandmorty/rickandmorty.js';


const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");

    if (navMenu.classList.contains("nav-menu_visible")) {
        navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
        navToggle.setAttribute("aria-label", "Abrir menú");
    }
});
import data from './data/athletes/athletes.js';
const athletesData = data.athletes

document.getElementById("athletes").addEventListener("click", () => {
    document.getElementById("firstScreen").style.display = "none";
    document.getElementById("secondScreen").style.display = "block";
    document.getElementById("thirdScreen").style.display = "none";
});



document.getElementById("countries").addEventListener("click", () => {
    document.getElementById("firstScreen").style.display = "none";
    document.getElementById("secondScreen").style.display = "none";
    document.getElementById("thirdScreen").style.display = "block";

});

document.getElementById("home").addEventListener("click", () => {
    document.getElementById("secondScreen").style.display = "none";
    document.getElementById("thirdScreen").style.display = "none";
    document.getElementById("firstScreen").style.display = "block";
});




