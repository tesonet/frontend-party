import { useDispatch, useSelector } from 'react-redux';
import {
  getToken,
  removeToken,
  setAuthenticatedToTrue,
} from '../../store/actions/auth.actions';

export default function useAuth() {
  const { authenticated, error } = useSelector(
    (state: any) => state.auth,
  );
  const dispatch = useDispatch();

  return {
    getToken: (username: string, password: string) =>
      dispatch(getToken(username, password)),
    authenticated,
    error,
    removeToken: () => dispatch(removeToken()),
    checkIfLogin: () =>
      localStorage.getItem('token') &&
      dispatch(setAuthenticatedToTrue()),
  };
}
