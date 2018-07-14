const get = key => {
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

const set = (key, value) => {
    try {
        const serializedItem = JSON.stringify(value);
        localStorage.setItem(key, serializedItem);
    } catch (err) {
        // Ignore write errors.
    }
};

export default {
    get,
    set,
};
