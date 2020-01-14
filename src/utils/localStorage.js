export const getFromLocalStorage = key => localStorage.getItem(key);
export const setToLocalStorage = (key, value) => localStorage.setItem(key, value);
export const removeItemFromLocalStorage = key => localStorage.removeItem(key);
export const clearLocalStorage =  () => localStorage.clear();
