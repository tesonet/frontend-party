import { NAME } from "./constants";

export const getServers = state => state[NAME].servers;
export const getToken = state => state[NAME].token;
export const getError = state => state[NAME].error;
export const isFetching = state => state[NAME].fetching;
