
import { mapByKey, filterByKey, filterMale, filterFemale } from './data.js';
import data from './data/athletes/athletes.js';

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

    allAthletes.innerHTML = ''
    showAthletes(athletesData);
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


const athletesData = data.athletes;
const allAthletes = document.getElementById('allAthletes');
const athletesBySports = mapByKey(athletesData, "sport");
let sports = [...new Set(athletesBySports)];
const selectSport = document.getElementById("sport");

const selectFemale = document.getElementById("check-female");
const selectMale = document.getElementById("check-male");


const showAthletes = (data) => {
    allAthletes.innerHTML = '';
    let info = '';
    let counter = 0;
    data.forEach((athletes) => {
        counter++;
        if (counter <= 48) {
            const div = document.createElement('div');
            div.classList.add("box");
            info = `<img src = ${athletes.gender==='F' ? './img/avatarFem.png' : './img/avatarMal.png'} class="avatar">
           <li class=name>${athletes.name}</li>
            <li class=info>${athletes.sport}</li>
            <li class=info>${athletes.event}</li>
            <li class=info>${athletes.team}</li>`;
            allAthletes.appendChild(div);
            div.innerHTML = info;

            // informacion de atleta en un modal
            const showAthleteModal = () => {
                let infoAthlete = '';
                const boxModal = document.createElement('div');
                boxModal.setAttribute('id', 'box-modal');
                boxModal.setAttribute('class', 'box-modal');
                infoAthlete = `<div class="athlete">
        <span class="close" id="close">X</span>
        <img src = ${athletes.genero === 'F' ? './img/avatarFem.png' : './img/avatarMal.png'} class="avatar2">
        <p class="name-modal">${athletes.name}</p>
        <table>
        <tr><td><p class="info-modal">Género: </p></td><td><p class="info-modal">${athletes.gender}</p></td></tr>
        <tr><td><p class="info-modal">Altura: </p></td><td><p class="info-modal">${athletes.height} cm</p></td></tr>
        <tr><td><p class="info-modal">Peso: </p></td><td><p class="info-modal">${athletes.weight} kg</p></td></tr>
        <tr><td><p class="info-modal">Deporte: </p></td><td><p class="info-modal">${athletes.sport}</p></td></tr>
        <tr><td><p class="info-modal">Disciplina: </p></td><td><p class="info-modal">${athletes.event}</p></td></tr>
        <tr><td><p class="info-modal">País: </p></td><td><p class="info-modal">${athletes.team}</p></td></tr>
        <tr><td><p class="info-modal">Edad: </p></td><td><p class="info-modal">${athletes.age}</p></td></tr>
        <tr><td><p class="info-modal">Año de Participación: </p></td><td><p class="info-modal">2016</p></td></tr>
        <tr><td><p class="info-modal">Sede Olímpica: </p></td><td><p class="info-modal">Río de Janeiro</p></td></tr>
        <tr><td><p class="info-modal">Medallas: </p></td><td><p class="info-modal">${athletes.medal}</p></td></tr>
        </table>
        </div>`;
                document.querySelector('#modal-athlete').appendChild(boxModal);
                boxModal.innerHTML = infoAthlete;

                // funcionalidad cerrar modal
                const close = document.querySelector('#close');
                close.addEventListener('click', () => {
                    document.querySelector('#modal-athlete').removeChild(boxModal);
                });
            };
            // mostrar modal al hacer click
            div.addEventListener('click', () => {
                showAthleteModal(athletes);
                document.querySelector('#modal-athlete').classList.remove('hide');
            });

        }


    });
    return showAthletes;
};



// Crear listas de opciones (teams y sports)
function listOfOptions(selectCategory, list) {
    for (let i = 0; i < list.length; i++) {
        let option = document.createElement("option"),
            txt = document.createTextNode(list[i]);
        option.appendChild(txt);
        selectCategory.appendChild(option);
    }
}

listOfOptions(selectSport, sports);

function includingAllFilters() {
    const sportOption = selectSport.value;

    const filteredSports = filterByKey(athletesData, sportOption, 'sport');
    let filteredData = filterByKey(filteredSports, sportOption, 'sport');

    if (selectMale.checked && !selectFemale.checked) {
        filteredData = filterMale(filteredData);
    }
    if (selectFemale.checked && !selectMale.checked) {
        filteredData = filterFemale(filteredData);
    }

    showAthletes(filteredData);
}

// Filter selection
selectSport.addEventListener("change", includingAllFilters);
selectFemale.addEventListener("change", includingAllFilters);
selectMale.addEventListener("change", includingAllFilters);

