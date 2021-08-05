import { DISTANCE, NAME } from '../config/constants';

const constructServer = (name, distance) => ({
  [NAME]: name,
  [DISTANCE]: distance,
});

export const unsortedServers = [
  constructServer('First server', 100),
  constructServer('Third server', 300),
  constructServer('Second server', 200),
];

export const sortedServersByNameDescending = [
  constructServer('Third server', 300),
  constructServer('Second server', 200),
  constructServer('First server', 100),
];

export const sortedServersByDistanceDescending = [
  constructServer('Third server', 300),
  constructServer('Second server', 200),
  constructServer('First server', 100),
];

export const sortedServersByNameAscending = [...sortedServersByNameDescending].reverse();
export const sortedServersByDistanceAscending = [...sortedServersByDistanceDescending].reverse();
