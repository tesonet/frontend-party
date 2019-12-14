import { NAME } from './constants';
import { getErrorMessage } from '../selectors';

export const getToken = state => state[NAME]?.data;
export const getError = state => getErrorMessage(state[NAME]?.error);
export const isFetching = state => state[NAME]?.fetching;
