import {
  GET_SERVERS_LIST_REQUEST,
  GET_SERVERS_LIST_SUCCESS,
  GET_SERVERS_LIST_FAILURE
} from '../../redux/actionsConst';
import { Server } from './types';

/* Action payloads interfaces */
export interface Error {
  error: string;
}

/* Action interfaces */
export interface GetServersRequestAction {
  type: typeof GET_SERVERS_LIST_REQUEST;
}

export interface GetServersSuccessAction {
  type: typeof GET_SERVERS_LIST_SUCCESS;
  data: Server[];
}

export interface GetServersFailureAction {
  type: typeof GET_SERVERS_LIST_FAILURE;
  data: Error;
}

export type GetServersListActionTypes =
  | GetServersRequestAction
  | GetServersSuccessAction
  | GetServersFailureAction;

/* Actions */
export const getServersListRequest = () => ({
  type: GET_SERVERS_LIST_REQUEST
});

export const getServersListSuccess = (data: Server[]) => ({
  type: GET_SERVERS_LIST_SUCCESS,
  data
});

export const getServersListFailure = (data: Error) => ({
  type: GET_SERVERS_LIST_FAILURE,
  data
});
