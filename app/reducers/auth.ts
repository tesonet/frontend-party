import {
  AuthActionType,
  LoginSuccessAction,
  LoginFailAction,
  LogoutAction,
} from 'Actions/auth';

export interface AuthState {
  isAuthenticated: boolean;
  token: string;
  loginError: string;
}

export type AuthAction = LoginSuccessAction | LoginFailAction | LogoutAction;

const auth = (state: AuthState = initialState, action: AuthAction) => {
  switch (action.type) {
    case AuthActionType.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        token: action.token,
        loginError: '',
      };
    case AuthActionType.LOGIN_FAIL:
      return { ...state, ...initialState, loginError: action.reason };
    case AuthActionType.LOGOUT:
      return { ...state, ...initialState };
    default:
      return state;
  }
};

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  loginError: '',
};

export default auth;
