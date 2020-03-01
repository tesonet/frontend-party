export const sortByDistance = (servers, sortType) =>
  sortType !== 'desc'
    ? servers.sort((a, b) => (a.distance > b.distance ? 1 : -1))
    : servers.sort((a, b) => (a.distance < b.distance ? 1 : -1));
