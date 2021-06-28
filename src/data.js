export const mapByKey = (data, key) => {
    return data
        .map(athletes => athletes[key])
        .sort((a, b) => a > b ? 1 : -1);
};

export const filterByKey = (data, condition, key) => {
    return data
        .filter(athletes => athletes[key].includes(condition));
};

export const filterFemale = (data) => {
    return data.filter(athletes => athletes.gender.includes('F'));
};

export const filterMale = (data) => {
    return data.filter(athletes => athletes.gender.includes('M'));
};