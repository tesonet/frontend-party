import { AuthActions, AuthActionTypes } from './authActions';
import { TOKEN_KEY } from '../../../helpers/apiCall';

export interface Credentials {
  username: string;
  password: string;
}

export interface AuthState {
  loggedIn: boolean;
  loading: boolean;
  error: any;
}

const initialState: AuthState = {
  loggedIn: false,
  loading: false,
  error: null
};

export const authReducer = (state = initialState, action: AuthActions): AuthState => {
  switch (action.type) {
    case AuthActionTypes.login:
      return {
        ...state,
        loading: true
      };
    case AuthActionTypes.loginSuccess:
      localStorage.setItem(TOKEN_KEY, action.payload.token);
      return {
        ...state,
        loading: false,
        loggedIn: true
      };
    case AuthActionTypes.loginError:
      return {
        ...state,
        loading: false,
        loggedIn: false,
        error: action.payload.error
      };
    case AuthActionTypes.logout:
      localStorage.removeItem(TOKEN_KEY);
      return {
        ...state,
        loading: false,
        loggedIn: false
      };
    default:
      return state;
  }
};