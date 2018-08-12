import { Thunk } from 'common/store/types';
import { createActionCreator } from 'common/utils/redux';
import wretch from 'wretch';
import { setIsAuthenticated, setToken } from '../auth/actions';
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

const tokensAPI = wretch('http://playground.tesonet.lt/v1/tokens');

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

interface IResponseBody {
  token: string;
}

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

  const requestBody = {
    username: fields.username.value,
    password: fields.password.value
  };

  const response = await tokensAPI.post(requestBody).res();

  if (!response.ok || response.status !== 200) {
    return dispatch(setStatus(Status.Error));
  }

  const responseBody: IResponseBody = await response.json();

  dispatch(setToken(responseBody.token));
  dispatch(setIsAuthenticated(true));
  dispatch(setStatus(Status.Idle));
  return;
};
