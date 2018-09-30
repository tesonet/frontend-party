const isLocalStorageAvailable = () => {
  const test = 'test';
  try {
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
};

export const getItem = (key) => {
  if (!isLocalStorageAvailable() || !key) {
    return null;
  }
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

export const setItem = (key, data) => {
  if (!isLocalStorageAvailable() || !key) {
    return;
  }
  localStorage.setItem(key, JSON.stringify(data));
};

export const removeItem = (key) => {
  if (!isLocalStorageAvailable() || !key) {
    return;
  }
  localStorage.removeItem(key);
};
