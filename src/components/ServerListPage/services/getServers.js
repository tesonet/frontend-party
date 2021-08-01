import tesonetClient from '@Common/client/tesonetClient';

const getServers = async (token) => tesonetClient.getServers(token);

export default getServers;
