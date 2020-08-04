import { useSelector } from 'react-redux';

import { getToken } from '@utils/token';
import { State } from '@redux/reducer';

export const useUserStatus = () => {
  const { isLoggedIn, isLoading } = useSelector((state: State) => state.user);
  const hasToken = !!getToken();

  return isLoggedIn && hasToken && !isLoading;
};
