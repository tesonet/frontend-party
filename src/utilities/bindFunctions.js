export default (object, ...functionNames) => {
  for (const name of functionNames) {
    object[name] = object[name].bind(object);
  }
};
