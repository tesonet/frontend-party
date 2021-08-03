import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setIsAuthenticated } from '../store/user/actions';
import useLocalStorage from './useLocalStorage';
import { TOKEN } from '../config/constants';

const useUserAuthentication = () => {
  const { value: token } = useLocalStorage(TOKEN);
  const isAuthenticated = useSelector(({ user }) => user.isAuthenticated);
  const dispatch = useDispatch();

  const updateUserAuthentication = (authenticated) => {
    dispatch(setIsAuthenticated(authenticated));
  };

  useEffect(() => {
    if (token) {
      updateUserAuthentication(true);
    }
  }, []);

  return {
    isAuthenticated,
    updateUserAuthentication,
  };
};

export default useUserAuthentication;
