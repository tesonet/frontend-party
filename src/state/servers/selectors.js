import { NAME } from './constants';

export const getServersData = state => state[NAME]?.data;
export const isFetching = state => state[NAME]?.fetching;
