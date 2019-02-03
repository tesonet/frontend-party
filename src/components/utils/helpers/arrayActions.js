export const sortArray = (key, order, array) => {
    let sortedArray;

    if (order === 'asc') {
        sortedArray = array.sort((a, b) => (a[key] > b[key] ? 1 : -1));
    }
    if (order === 'desc') {
        sortedArray = array.sort((a, b) => (a[key] < b[key] ? 1 : -1));
    }

    return sortedArray;
};
