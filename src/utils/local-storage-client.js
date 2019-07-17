export default () => ({
  get: key => window.localStorage.getItem(key),
  set: (key, value) => window.localStorage.setItem(key, value),
  remove: key => window.localStorage.removeItem(key)
});
