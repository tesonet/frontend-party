export const PREFIX = 'testio';


export const toKey = $key => `${PREFIX}@${$key}`;


export const toModuleKey = (modulePrefix, $key) => `${modulePrefix}|${$key}`;


export const getValue = (key, defaultValue) => {
  const value = localStorage.getItem(toKey(key));
  return value == null ? defaultValue : JSON.parse(value);
};


export const setValue = (key, value) => {
  localStorage.setItem(toKey(key), JSON.stringify(value));
};


export const removeValue = (key) => {
  localStorage.removeItem(toKey(key));
};


export default {get: getValue, set: setValue, remove: removeValue};
