export const getStorageToken = (key) => localStorage.getItem(key);

export const setStorageToken = (key, item) => {
  localStorage.setItem(key, item);
};

export const deleteStorageToken = (key) => {
  localStorage.removeItem(key);
};
