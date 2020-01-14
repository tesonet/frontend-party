import { Actions, ActionTypes } from "./actions";

export interface UserState {
  token: string | null;
  isFetching: boolean;
  error: null | string;
}

const initialState: UserState = {
  token: null,
  isFetching: false,
  error: null
};

export const userReducer = (
  state: UserState = initialState,
  action: Actions
): UserState => {
  switch (action.type) {
    case ActionTypes.LOG_IN_REQUEST:
      return {
        ...state,
        token: null,
        isFetching: true,
        error: null
      };
    case ActionTypes.LOG_IN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        isFetching: false,
        error: null
      };
    case ActionTypes.LOG_IN_ERROR:
      return {
        ...state,
        token: null,
        isFetching: false,
        error: action.payload
      };
    case ActionTypes.LOG_OUT:
      return {
        ...state,
        token: null,
        isFetching: false,
        error: null
      };
    default:
      return state;
  }
};
