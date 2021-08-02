import { ASCENDING } from '../config/constants';

const sortServers = (sortConfig, fieldName, servers) => servers.sort((a, b) => {
  if (a[fieldName] < b[fieldName]) {
    return sortConfig[fieldName] === ASCENDING ? -1 : 1;
  }

  if (a[fieldName] > b[fieldName]) {
    return sortConfig[fieldName] === ASCENDING ? 1 : -1;
  }

  return 0;
});

export default sortServers;
