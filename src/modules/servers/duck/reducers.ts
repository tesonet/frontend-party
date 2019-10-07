import { ServerActionTypes } from './actions';
import { ServerAction, ServerState } from './model';

const initialState: ServerState = {
  servers: [],
  loading: false,
};

export const serverReducers = (state = initialState, action: ServerAction) => {
  switch (action.type) {
    case ServerActionTypes.GetAll:
      return { ...state, loading: true };
    case ServerActionTypes.GetAllDone:
      return { ...state, loading: false, servers: action.payload.servers };
    default:
      return state;
  }
};
