import { AuthAction } from 'Reducers/auth';
import { AuthActionType } from 'Actions/auth';

const authenticationMiddleware = store => next => (action: AuthAction) => {
  switch (action.type) {
    case AuthActionType.LOGIN_SUCCESS:
      localStorage.setItem('token', action.token);
      break;
    case AuthActionType.LOGOUT:
      localStorage.removeItem('token');
      break;
  }

  return next(action);
};

export default authenticationMiddleware;
