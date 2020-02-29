import axios from './axios';
import * as actions from '../actions/auth';
import { saveToken } from '../../utility/saveToken';

export const auth = (username, password) => dispatch => {
  dispatch(actions.authStart());
  const postData = {
    username,
    password,
  };
  axios
    .post('/tokens', postData)
    .then(res => {
      dispatch(actions.authSuccess(res.data.token)), saveToken(res.data.token);
    })
    .catch(() => dispatch(actions.authFail())); // no error message in response
};
