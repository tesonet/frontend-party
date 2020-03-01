export const sortByName = (servers, sortType) =>
  sortType !== 'desc'
    ? servers.sort((a, b) => (a.name > b.name ? 1 : -1))
    : servers.sort((a, b) => (a.name < b.name ? 1 : -1));
