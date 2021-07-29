import { useHistory } from 'react-router-dom';

import routes from '../config/routes';

const useRedirect = () => {
  const history = useHistory();

  const redirect = (route) => {
    if (history && route) {
      history.push(route);
    }

    return true;
  };

  return {
    toMain: () => redirect(routes.MAIN),
    toLogin: () => redirect(routes.LOGIN),
  };
};

export default useRedirect;
