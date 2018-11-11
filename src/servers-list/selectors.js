import { compareNumbers, compareStrings } from '../app';

export const getServerslistSorted = ({ servers }) => servers.list
    .sort((server1, server2) => compareNumbers(server1.distance, server2.distance) || compareStrings(server1.name, server2.name));
