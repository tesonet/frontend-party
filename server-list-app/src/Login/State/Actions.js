

export class LoginActionTypes {
  static LOGIN_VALIDATION_PROGRESS_STATE = Symbol();
  static LOGIN_VALIDATION_HAS_ERRORS = Symbol();
}

export class LoginActions {
  static setValidationProgressState(progressCurrentState) {
    return {
      type: LoginActionTypes.LOGIN_VALIDATION_PROGRESS_STATE,
      progressCurrentState: progressCurrentState
    };
  }
}

export default LoginActions;