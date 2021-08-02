import { useDispatch, useSelector } from 'react-redux';

import { setIsAuthenticated } from '../store/user/actions';

import useLocalStorage from './useLocalStorage';

const useUserAuthentication = () => {
  const {
    token,
    updateToken,
    removeToken,
  } = useLocalStorage();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const dispatch = useDispatch();

  const updateUserAuthentication = (authenticated) => {
    dispatch(setIsAuthenticated(authenticated));
  };

  return {
    isAuthenticated,
    updateUserAuthentication,
  };
};

export default useUserAuthentication;
