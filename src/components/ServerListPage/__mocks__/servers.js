import { DISTANCE, NAME } from '../config/constants';

const constructServer = (name, distance) => ({
  [NAME]: name,
  [DISTANCE]: distance,
});

const servers = [
  constructServer('First server', 100),
  constructServer('Second server', 200),
  constructServer('Third server', 300),
  constructServer('Fourth server', 400),
  constructServer('Fitfh server', 500),
];

export default servers;
