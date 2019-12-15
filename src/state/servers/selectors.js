import { NAME } from './constants';
import { getErrorMessage } from '../selectors';

export const getServersData = state => state[NAME]?.data;
export const isFetching = state => state[NAME]?.fetching;
export const getError = state => getErrorMessage(state[NAME]?.error);
