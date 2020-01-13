import { Actions, ActionTypes } from "./actions";

export interface UserState {
  token: string | null;
}

const initialState: UserState = {
  token: null
};

export const userReducer = (
  state: UserState = initialState,
  action: Actions
): UserState => {
  switch (action.type) {
    case ActionTypes.LOG_IN_REQUEST:
      return {
        ...state,
        token: null
      };
    case ActionTypes.LOG_IN_SUCCESS:
      return {
        ...state,
        token: action.payload.token
      };
    default:
      return state;
  }
};
