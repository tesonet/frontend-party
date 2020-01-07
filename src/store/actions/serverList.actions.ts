import * as types from '../types/serverList.types';

export function getServerList() {
  return { type: types.GET_SERVER_LIST };
}
