export const getFromLocalStorage = key => {
    try {
        const serializedItem = localStorage.getItem(key);
        if (serializedItem === null) {
            return undefined;
        }
        return JSON.parse(serializedItem);
    } catch (err) {
        return undefined;
    }
};

export const setToLocalStorage = (key, value) => {
    try {
        const serializedItem = JSON.stringify(value);
        localStorage.setItem(key, serializedItem);
    } catch (err) {
        return undefined;
    }
};

export const removeFromLocalStorage = key => localStorage.removeItem(key);
