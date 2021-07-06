import {
    mapByKey,
    filterByKey,
    filterMale,
    filterFemale,
    sortByName,
    filterByName,
    medalsByGender
}
    from "./data.js";
import data from "./data/athletes/athletes.js";

const navToggle = document.querySelector(".nav-toggle");
const navToggleCross = document.querySelector(".nav-toggle-cross");
const navMenu = document.querySelector(".nav-menu");
const athletesData = data.athletes;
const allAthletes = document.getElementById("allAthletes");
const medalsGender = document.getElementById("medalsGender");

const athletesBySports = mapByKey(athletesData, "sport");
let sports = [...new Set(athletesBySports)];

const athletesByEvents = mapByKey(athletesData, "event");
let events = [...new Set(athletesByEvents)];

const athletesByCountries = mapByKey(athletesData, "team");
let countries = [...new Set(athletesByCountries)];

const athletesByMedals = mapByKey(athletesData, "medal");
let medals = [...new Set(athletesByMedals)];

const athletesByGender = mapByKey(athletesData, "gender");
let genderFM = [...new Set(athletesByGender)];

const selectSport = document.getElementById("sport");
const selectFemale = document.getElementById("check-female");
const selectMale = document.getElementById("check-male");
const selectOrderAZ = document.getElementById("a-z");
const selectOrderZA = document.getElementById("z-a");
const showAthletes = (data) => {

    allAthletes.innerHTML = '';
    let info = '';
    let counter = 0;
    data.forEach((athletes) => {
        counter++;
        if (counter <= 48) {
            const div = document.createElement('div');
            div.classList.add("box");
            info = `<img src = ${athletes.gender === 'F' ? './img/avatarFem.png' : './img/avatarMal.png'} class="avatar">
           <li class=name>${athletes.name}</li><br>
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
         <span class="close" id="close">x</span>
         <img src = ${athletes.gender === 'F' ? './img/avatarFem.png' : './img/avatarMal.png'} class="avatar2">

         <p class="name-modal">${athletes.name}</p>
        <table>
        <tr><td><p class="info-modal">Género: </p></td><td><p class="info-modal">${athletes.gender
                    }</p></td></tr>
        <tr><td><p class="info-modal">Altura: </p></td><td><p class="info-modal">${athletes.height
                    } cm</p></td></tr>
        <tr><td><p class="info-modal">Peso: </p></td><td><p class="info-modal">${athletes.weight
                    } kg</p></td></tr>
        <tr><td><p class="info-modal">Deporte: </p></td><td><p class="info-modal">${athletes.sport
                    }</p></td></tr>
        <tr><td><p class="info-modal">Disciplina: </p></td><td><p class="info-modal">${athletes.event
                    }</p></td></tr>
        <tr><td><p class="info-modal">País: </p></td><td><p class="info-modal">${athletes.team
                    }</p></td></tr>
        <tr><td><p class="info-modal">Edad: </p></td><td><p class="info-modal">${athletes.age
                    }</p></td></tr>
        <tr><td><p class="info-modal">Año de Participación: </p></td><td><p class="info-modal">2016</p></td></tr>
        <tr><td><p class="info-modal">Sede Olímpica: </p></td><td><p class="info-modal">Río de Janeiro</p></td></tr>
        <tr><td><p class="info-modal">Medallas: </p></td><td><p class="info-modal">${athletes.medal
                    }</p></td></tr>
        </table>
        </div>`;
                document.querySelector("#modal-athlete").appendChild(boxModal);
                boxModal.innerHTML = infoAthlete;
                // funcionalidad cerrar modal
                const close = document.querySelector("#close");
                close.addEventListener("click", () => {
                    document.querySelector("#modal-athlete").removeChild(boxModal);
                });
            };
            // mostrar modal al hacer click
            div.addEventListener("click", () => {
                showAthleteModal(athletes);
                document.querySelector("#modal-athlete").classList.remove("hide");
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
    const filteredSports = filterByKey(athletesData, sportOption, "sport");
    let filteredData = filterByKey(filteredSports, sportOption, "sport");
    if (selectFemale.checked && !selectMale.checked) {
        filteredData = filterFemale(filteredData);
    }
    if (selectMale.checked && !selectFemale.checked) {
        filteredData = filterMale(filteredData);
    }
    showAthletes(filteredData);
}
// Filter selection
selectSport.addEventListener("change", includingAllFilters);
selectFemale.addEventListener("change", includingAllFilters);
selectMale.addEventListener("change", includingAllFilters);

// creando lista de paises dentro de select
let selectCountry = document.getElementById("country");
listOfOptions(selectCountry, countries);

// Filtrando por pais
selectCountry.addEventListener("change", () => {
    const countryValue = selectCountry.value;
    const filtrandoPorPaises = filterByKey(athletesData, countryValue, "team");
    showAthletes(filtrandoPorPaises);
});
// creando lista de medallas dentro de select
let selectMedal = document.getElementById("medals");
listOfOptions(selectMedal, medals);

// Filtrando por medallas
selectMedal.addEventListener("change", () => {
    const medalValue = selectMedal.value;
    const filtrandoPorMedallas = filterByKey(athletesData, medalValue, "medal");
    showAthletes(filtrandoPorMedallas);
});

// creando lista de eventos dentro de select
let selectEvent = document.getElementById("event");
listOfOptions(selectEvent, events);

// Filtrando por eventos
selectEvent.addEventListener("change", () => {
    const eventValue = selectEvent.value;
    const filtrandoPorEventos = filterByKey(athletesData, eventValue, "event");
    showAthletes(filtrandoPorEventos);
});

//Ordenar por alfabeticamente A-Z
selectOrderAZ.addEventListener("click", () => {
    const sortingByName = sortByName(athletesData);
    showAthletes(sortingByName);
});
//Ordenar por alfabeticamente Z-A
selectOrderZA.addEventListener("click", () => {
    const sortingByName = sortByName(athletesData).reverse();
    showAthletes(sortingByName);
});

//Buscar por nombre
const searcher = document.querySelector("#search");

searcher.addEventListener("keyup", () => {
    const searchString = searcher.value.toLowerCase(); //
    const filteredNames = filterByName(athletesData, searchString);
    if (filteredNames.length == 0) {
        allAthletes.textContent = "No se encontraron coincidencias. Inténtelo nuevamente.";
    } else {
        allAthletes.innerHTML = "";
        showAthletes(filteredNames);
    }
});

// Medallas por genero medalsByGender
medalsGender.innerHTML = "";
let counter = [];
genderFM.forEach((gender) => {
    let gold = medalsByGender(athletesData, gender, "Gold");
    let silver = medalsByGender(athletesData, gender, "Silver");
    let bronze = medalsByGender(athletesData, gender, "Bronze");
    let total = gold + silver + bronze;

    counter.push({
        Genero: gender,
        Total: total,
        Oro: gold,
        Plata: silver,
        Bronce: bronze
    })
});

counter.forEach((obj) => {
    let x = ""
    const boxi = document.createElement("tr");
    x = `<td> ${obj.Genero}</td>
    <td> ${obj.Total}</td>
    <td> ${obj.Oro}</td>
    <td>${obj.Plata}</td>
    <td>${obj.Bronce}</td>`
    medalsGender.appendChild(boxi);
    boxi.innerHTML = x;
});




navToggle.addEventListener("click", () => {
    navToggle.style.display = "none"
    if (navToggle.style.display === "block") {
        navToggleCross.style.display = "none"
    } else {
        navToggleCross.style.display = "block"
    }

    navMenu.classList.toggle("nav-menu_visible");
    if (navMenu.classList.contains("nav-menu_visible")) {
        navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
        navToggle.setAttribute("aria-label", "Abrir menú");
    }
});

navToggleCross.addEventListener("click", () => {
    navToggle.style.display = "block"
    //navToggleCross.style.display = "none"
    navMenu.classList.toggle("nav-menu_visible");
});

document.getElementById("athletes").addEventListener("click", () => {
    document.getElementById("firstScreen").style.display = "none";
    document.getElementById("secondScreen").style.display = "block";
    document.getElementById("thirdScreen").style.display = "none";
    allAthletes.innerHTML = "";
    showAthletes(athletesData);
});
document.getElementById("statistics").addEventListener("click", () => {
    document.getElementById("firstScreen").style.display = "none";
    document.getElementById("secondScreen").style.display = "none";
    document.getElementById("thirdScreen").style.display = "block";

});
document.getElementById("home").addEventListener("click", () => {
    document.getElementById("secondScreen").style.display = "none";
    document.getElementById("thirdScreen").style.display = "none";
    document.getElementById("firstScreen").style.display = "block";
});
