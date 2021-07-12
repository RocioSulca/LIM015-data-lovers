// funcion para iterar y ordenar 
export const mapByKey = (data, key) => {
  return data.map((athletes) => athletes[key]).sort((a, b) => (a > b ? 1 : -1));
};

// funcion para filtrar
export const filterByKey = (data, condition, key) => {
  return data.filter((athletes) => athletes[key].includes(condition));
};

// funcion para filtrar por genero
export const filterFemale = (data) => {
  return data.filter((athletes) => athletes.gender.includes("F"));
};
export const filterMale = (data) => {
  return data.filter((athletes) => athletes.gender.includes("M"));
};

// funcion para ordenar A-Z
export const sortByName = (data) => {
  let final = "";
  final = data.sort(function (a, b) {
    const namea = a.name.toLowerCase();
    const nameb = b.name.toLowerCase();
    if (namea > nameb) {
      return 1;
    }
    if (namea < nameb) {
      return -1;
    }
    // a es igual que b
    return 0;
  });
  return final;
};

// funcion para el buscador
export const filterByName = (data, value) => {
  return data.filter((athletes) => athletes.name.toLowerCase().includes(value));
};

//ESTADISTICAS
// Funcion de filtrar medalla por pais
export const countryByMedals = (data, conditionTeam, conditionMedal) => {
  let dataCondition = data.filter((athletes) => athletes.team.includes(conditionTeam));
  let teamM = dataCondition.filter((medals) => medals.medal.includes(conditionMedal)).length;
  return teamM; 
};

//Orden de tabla de manera descendente (números, por eso no se usa la funció de arriba)
export const sortByTotal = (data, condition) => {
  if (condition === "asc") {
    return data.sort((a, b) => a.total - b.total);
  } else {
    return data.sort((a, b) => b.total - a.total);
  }
};
// Funcion de filtrar medalla por genero
export const medalsByGender = (data, conditionGender, conditionMedal) => { 
  let medalsG = data.filter((athletes) => athletes.gender.includes(conditionGender));
  let genderM = medalsG.filter((medals) => medals.medal.includes(conditionMedal)).length;
  return genderM;
};


export const reduceByTotal = (data,key) => {
  let x = data.map((key) => key.reduce((a,b)=>(a+b)));
  return x;

}