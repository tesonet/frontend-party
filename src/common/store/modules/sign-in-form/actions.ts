import { Routes } from 'common/routes';
import { Thunk } from 'common/store/types';
import { createActionCreator } from 'common/utils/redux';
import { push } from 'connected-react-router';
import { setIsAuthenticated, setToken } from '../auth/actions';
import { fetchToken } from './api';
import { SET_ERROR, SET_IS_VALID, SET_STATUS, SET_VALUE } from './constants';
import {
  IFields,
  ISetIsValidPayload,
  ISetValuePayload,
  SetErrorPayload,
  Status
} from './types';
import { validatePassword, validateUsername } from './validation';

export const setValue = createActionCreator<ISetValuePayload>(SET_VALUE);
const setIsValid = createActionCreator<ISetIsValidPayload>(SET_IS_VALID);
const setError = createActionCreator<SetErrorPayload>(SET_ERROR);
const setStatus = createActionCreator<Status>(SET_STATUS);

export const validateField = (key: keyof IFields): Thunk => (
  dispatch,
  getState
) => {
  const { value } = getState().signInForm.fields[key];

  const validator = key === 'username' ? validateUsername : validatePassword;

  try {
    validator(value);
  } catch (err) {
    dispatch(setIsValid({ key, value: false }));
    return dispatch(setError({ key, value: err }));
  }

  dispatch(setIsValid({ key, value: true }));
  return dispatch(setError({ key, value: null }));
};

export const signIn = (): Thunk => async (dispatch, getState) => {
  const { status } = getState().signInForm;

  if (status === Status.Loading) {
    return;
  }

  dispatch(validateField('username'));
  dispatch(validateField('password'));

  const { fields } = getState().signInForm;

  if (!fields.username.isValid || !fields.password.isValid) {
    return;
  }

  dispatch(setStatus(Status.Loading));

  try {
    const response = await fetchToken(
      fields.username.value!,
      fields.password.value!
    );

    dispatch(setToken(response.token));
    dispatch(setIsAuthenticated(true));
    dispatch(setStatus(Status.Idle));
    dispatch(push(Routes.Home));
    dispatch(setValue({ key: 'password', value: null }));
  } catch (err) {
    dispatch(setStatus(Status.Error));
  }
};
