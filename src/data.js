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
// funcion para ordenar A-Z
export const sortByName = (data) => {
    let final = '';
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
    })
    return final;
};

export const filterByName = (data, value) => {
    return data.filter(athletes => athletes.name.toLowerCase().includes(value));
};

// Funcion de filtrar medalla por 
export const medalsByGender = (data, gender, medal) => {
    let medalsG = data.filter(athletes => athletes.gender.includes(gender));
    let genderM = medalsG.filter(medals => medals.medal.includes(medal)).length;
    return genderM;
};