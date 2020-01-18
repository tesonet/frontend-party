export default (arr, property, type) => {
  let sortedArray = arr.sort((a, b) => {
    return a[property] !== b[property]
      ? a[property] < b[property]
        ? 1
        : -1
      : 0;
  });

  type === "asc" && sortedArray.reverse();

  return sortedArray;
};
