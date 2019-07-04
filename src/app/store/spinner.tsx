export const SPINNER_TIMEOUT = 300;

const spinnerActionTypes = {
  SHOW_SPINNER: 'SHOW_SPINNER',
  HIDE_SPINNER: 'HIDE_SPINNER',
};

export const spinnerShowAction = () => ({ type: spinnerActionTypes.SHOW_SPINNER });

export const spinnerHideAction = () => ({ type: spinnerActionTypes.HIDE_SPINNER });

export const spinnerReducer = (state: boolean = false, action: any) => {
  switch (action.type) {
    case spinnerActionTypes.SHOW_SPINNER:
      return true;
    case spinnerActionTypes.HIDE_SPINNER:
      return false;
    default:
      return state;
  }
};
