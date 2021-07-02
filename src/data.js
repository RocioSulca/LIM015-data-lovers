export const mapByKey = (data, key) => {
    return data
        .map(athletes => athletes[key])
        .sort((a, b) => a > b ? 1 : -1);
};

export const filterByKey = (data, condition, key) => {
    return data.filter(athletes => athletes[key].includes(condition));
};

export const filterFemale = (data) => {
    return data.filter(athletes => athletes.gender.includes('F'));
};

export const filterMale = (data) => {
    return data.filter(athletes => athletes.gender.includes('M'));
};

// Funcion para ordenar de la a-z
export const sortByNameAZ = (data) => {
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
        // a must be equal to b
        return 0;
    });
    return final;
};

// Funcion para ordenar de la z-a
export const sortByNameZA = (data) => {
    const final = data.reverse();
    return final;
};

// Funcion para buscar
export const searchByName = (data, value) => {
    return  data.filter(athletes => athletes.name.toLowerCase().includes(value));
    
};
