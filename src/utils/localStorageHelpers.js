export const setItem = (key, data) => {
	localStorage.setItem(key, data);
};

export const getItem = key => {
	return localStorage.getItem(key);
};

export const removeItem = key => {
	localStorage.removeItem(key);
};