export const sortByNumbers = (array, property, desc) => {
    return desc ? array.sort((a, b) => a[property] - b[property]) : array.sort((a, b) => b[property] - a[property]);
};

export const sortAlphabetically = (array, property, desc) => {
    return desc ? array.sort((a, b) => a[property].localeCompare(b[property])) : array.sort((a, b) => b[property].localeCompare(a[property]));
};

export const getSortingFunction = function(sortingType) {
    let sortingFunction;
    switch (sortingType) {
        case 'numbers':
            sortingFunction = sortByNumbers;
            break;
        case 'alphabetically':
            sortingFunction = sortAlphabetically;
            break;
        default:
            sortingFunction = sortAlphabetically;
    }
    return sortingFunction;
}