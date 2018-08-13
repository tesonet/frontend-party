import { Routes } from 'common/routes';
import { Thunk } from 'common/store/types';
import { createActionCreator } from 'common/utils/redux';
import { push } from 'connected-react-router';
import { setIsAuthenticated, setToken } from '../auth/actions';
import { fetchToken } from './api';
import {
  SET_ERROR,
  SET_FIELD_ERROR,
  SET_FIELD_IS_VALID,
  SET_FIELD_VALUE,
  SET_STATUS
} from './constants';
import {
  IFields,
  ISetIsValidPayload,
  ISetValuePayload,
  SetErrorPayload,
  Status
} from './types';
import { validatePassword, validateUsername } from './validation';

export const setFieldValue = createActionCreator<ISetValuePayload>(
  SET_FIELD_VALUE
);
const setFieldIsValid = createActionCreator<ISetIsValidPayload>(
  SET_FIELD_IS_VALID
);
const setFieldError = createActionCreator<SetErrorPayload>(SET_FIELD_ERROR);
const setStatus = createActionCreator<Status>(SET_STATUS);
const setError = createActionCreator<string | null>(SET_ERROR);

export const validateField = (key: keyof IFields): Thunk => (
  dispatch,
  getState
) => {
  const { value } = getState().signInForm.fields[key];

  const validator = key === 'username' ? validateUsername : validatePassword;

  try {
    validator(value);
  } catch (err) {
    dispatch(setFieldIsValid({ key, value: false }));
    return dispatch(setFieldError({ key, value: err }));
  }

  dispatch(setFieldIsValid({ key, value: true }));
  return dispatch(setFieldError({ key, value: null }));
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
    dispatch(setFieldValue({ key: 'password', value: null }));
  } catch (err) {
    dispatch(setStatus(Status.Error));
    dispatch(setError(err.message));
  }
};
