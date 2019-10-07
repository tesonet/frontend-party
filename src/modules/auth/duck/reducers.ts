import { AuthActionTypes } from './actions';
import { AuthAction, AuthState } from './model';

const initialState: AuthState = {
  isLoggedIn: false,
  isLoading: false,
};

export const authReducers = (state = initialState, action: AuthAction) => {
  switch (action.type) {
    case AuthActionTypes.Login:
    case AuthActionTypes.Logout:
    case AuthActionTypes.GetLoggedInStatus:
      return { ...state, isLoading: true };
    case AuthActionTypes.LoginDone:
      return { ...state, isLoading: false, isLoggedIn: true };
    case AuthActionTypes.LogoutDone:
      return { ...state, isLoading: false, isLoggedIn: false };
    case AuthActionTypes.GetLoggedInStatusDone:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: action.payload.isLoggedIn,
      };
    default:
      return state;
  }
};
