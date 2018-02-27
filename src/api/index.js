import Playground from './Playground';

const playground = new Playground();

export const fetchToken = data => playground.token(data);
export const fetchServers = token => playground.servers(token);
