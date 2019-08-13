export interface ServersState {
    servers: ServerItem[];   
}

export interface ServerItem {
    name: string,
    distance: string,
}

export const SET_SERVERS_LIST = "SET_SERVERS_LIST";

interface ServersAction {
    type: typeof SET_SERVERS_LIST;
    payload: ServerItem[];
}

export type ServersActionTypes = ServersAction;