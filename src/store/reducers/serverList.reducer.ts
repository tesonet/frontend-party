import * as types from '../types/serverList.types';

export const INITIAL_STATE: any = {
  serverList: [],
  fetchingServerList: false,
};

export default (state = INITIAL_STATE, action: any) => {
  const { type, error, serverList } = action;
  switch (type) {
    case types.GET_SERVER_LIST:
      return { ...state, fetchingServerList: true, error: null };
    case types.GET_SERVER_LIST_FAILURE:
      return { ...state, fetchingServerList: false, error };
    case types.GET_SERVER_LIST_SUCCESS:
      return {
        ...state,
        fetchingServerList: false,
        serverList,
        error: null,
      };
    default:
      return state;
  }
};
