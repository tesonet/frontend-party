const string = (list, key) => {
  return list.sort((a, b) => {
    if (a[key] > b[key]) return 1;
    if (a[key] < b[key]) return -1;
    return 0;
  });
};

const number = (list, key) => {
  return list.sort((a, b) => a[key] - b[key]);
};

export default { string, number }