import { ASCENDING } from '../config/constatns';

const sortServersByDistance = (direction, servers) => servers.sort((a, b) => {
  if (a.distance < b.distance) {
    return direction === ASCENDING ? -1 : 1;
  }

  if (a.distance > b.distance) {
    return direction === ASCENDING ? 1 : -1;
  }

  return 0;
});

export default sortServersByDistance;
