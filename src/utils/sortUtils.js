export const getSortOrder = currOrder =>
  !currOrder || currOrder === "desc" ? "asc" : "desc";

export const sortByObjectStringProperty = (arr, property, order) =>
  arr.sort((a, b) => {
    const propertyA = a[property].toLowerCase();
    const propertyB = b[property].toLowerCase();

    if (propertyA < propertyB) {
      return order === "asc" ? -1 : 1;
    }
    if (propertyA > propertyB) {
      return order === "asc" ? 1 : -1;
    }

    return 0;
  });

export const sortByObjectByNumberProperty = (arr, property, order) =>
  arr.sort((a, b) => {
    return order === "asc"
      ? a[property] - b[property]
      : b[property] - a[property];
  });
