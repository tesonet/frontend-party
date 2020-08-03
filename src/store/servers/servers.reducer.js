import serversConstants from './servers.constants';

const initialState = {
  serversList: [],
  loading: false,
  isError: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case serversConstants.GET_SERVERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case serversConstants.GET_SERVERS_SUCCESS:
      return {
        ...state,
        serversList: action.payload,
        loading: false,
      };
    case serversConstants.GET_SERVERS_FAIL:
      return {
        ...state,
        isError: true,
        loading: false,
      };
    default:
      return state;
  }
};
