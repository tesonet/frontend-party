import { getUserToken } from '../../server/api/tesonetApi';
import * as actionTypes from './actionTypes';

const fetchSuccess = (servers) => ({
  type: actionTypes.SET_TOKEN,
  payload: { servers },
});

export const logout = () => ({
  type: actionTypes.LOGOUT,
});

export const setToken = async (values) => {
  // const dispatch = useDispatch();
  const response = await getUserToken(values);

  if (response && response.ok) {
    const data = await response.json();
    // const list = await getServersList(data.token);

    localStorage.setItem('token', data.token);
    // dispatch(fetchSuccess(list));
  }
};
