export const joinTruthy = (items, delimiter = ' ') =>
  (items || []).filter(item => !!item).join(delimiter);

export const sortArrayOfObjectsByKey = (array, objectKey, isAscending) => array.sort((a, b) => {
  let nameA = a[objectKey];
  let nameB = b[objectKey];
  if (typeof nameA === "string" && typeof nameB === "string") {
    nameA = nameA.toLowerCase();
    nameB = nameB.toLowerCase();
  }

  if (isAscending) {
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  } else {
    if (nameA > nameB) return -1;
    if (nameA < nameB) return 1;
    return 0;
  }

});
