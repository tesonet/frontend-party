import { Routes } from 'common/routes';
import { Thunk } from 'common/store/types';
import { push } from 'connected-react-router';

export const maybeRedirect = (): Thunk => (dispatch, getState) => {
  if (!getState().auth.isAuthenticated) {
    return;
  }

  dispatch(push(Routes.Home));
};
