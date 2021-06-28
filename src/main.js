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

let allCountry = document.getElementById("cuerpo");

document.getElementById("countries").addEventListener("click", () => {
    document.getElementById("firstScreen").style.display = "none";
    document.getElementById("secondScreen").style.display = "none";
    document.getElementById("thirdScreen").style.display = "block";

// creando lista de paises dentro de select

    let fillByCountry = athletesData.map(function (country) {
        return country.team;
    })

    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }
    let unique = fillByCountry.filter(onlyUnique);

    let selectCountry = document.getElementById("country");

    (function () {
        const countriesInOrder = unique.sort();
        countriesInOrder.forEach((pais) => {
            const option = document.createElement('option');
            option.textContent = pais;
            option.setAttribute('value', pais);
            option.setAttribute('class', 'options');
            selectCountry.appendChild(option);
        });
    })();


});

document.getElementById("home").addEventListener("click", () => {
    document.getElementById("secondScreen").style.display = "none";
    document.getElementById("thirdScreen").style.display = "none";
    document.getElementById("firstScreen").style.display = "block";
});




