import {
  CLEAR_USER,
  RECEIVE_USER,
  REJECT_USER,
  REQUEST_USER,
  localUserToken
} from 'app/utils/constants';

export function requestUser(credentials) {
  return {
    type: REQUEST_USER,
    loading: true,
    rejected: false,
    credentials
  };
}

export function receiveUser(data) {
  localStorage.setItem(localUserToken, data.token);
  return {
    type: RECEIVE_USER,
    loading: false
  };
}

export function rejectUser(err) {
  return {
    type: REJECT_USER,
    loading: false,
    rejected: true
  };
}

export function clearUser() {
  localStorage.removeItem(localUserToken);
  return {
    type: CLEAR_USER
  };
}
