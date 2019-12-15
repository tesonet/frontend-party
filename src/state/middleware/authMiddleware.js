import { isRSAA, RSAA } from 'redux-api-middleware';
import auth from '../auth';

export default ({ getState }) => next => action => {
  if (!isRSAA(action)) {
    return next(action);
  }
  const token = auth.selectors.getToken(getState());

  if (!token) {
    return next(action);
  }

  return next({
    ...action,
    [RSAA]: {
      ...action[RSAA],
      headers: {
        ...action[RSAA].headers,
        authorization: token,
      },
    },
  });
};
