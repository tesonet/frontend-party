const set = (key, data) => {
    if (!window.localStorage || !window.JSON || !key) {
        return;
    }
    localStorage.setItem(key, JSON.stringify(data));
};

const get = key => {
    if (!window.localStorage || !window.JSON || !key) {
        return null;
    }
    const item = localStorage.getItem(key);

    return JSON.parse(item);
};

const remove = key => {
    if (!window.localStorage || !window.JSON || !key) {
        return;
    }
    localStorage.removeItem(key);
};

export default {
    get,
    set,
    remove
};
