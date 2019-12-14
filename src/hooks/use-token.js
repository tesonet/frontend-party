import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../reducers/current-user';

const localStorageKey = 'my-token-key';

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadedToken = window.localStorage.getItem(localStorageKey);
    if (loadedToken) {
      dispatch({ type: userActions.setToken, payload: loadedToken });
    }
  }, [dispatch]);

  const token = useSelector(state => state.currentUser.token);

  const setToken = useCallback(
    (token) => {
      dispatch({ type: userActions.setToken, payload: token });
      window.localStorage.setItem(localStorageKey, token);
    },
    [dispatch]
  );

  return [token, setToken];
}