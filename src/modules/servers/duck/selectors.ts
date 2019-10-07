import { State } from '@redux/reducer';

export const getAllServers = (state: State) => state.servers.servers;
export const isServersLoading = (state: State) => state.servers.loading;
