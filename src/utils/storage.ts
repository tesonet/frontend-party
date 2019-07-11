const get = key => {
    try {
        return localStorage.getItem(key);
    } catch {
        return null;
    }
};

const set = (key, value) => {
    localStorage.setItem(key, value);
};

const remove = key => {
    localStorage.removeItem(key);
};

export default {
    get,
    set,
    remove,
};
