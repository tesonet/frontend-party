import { isRSAA, RSAA } from 'redux-api-middleware';

export default () => next => action => {
  if (!isRSAA(action)) {
    return next(action);
  }

  return next({
    ...action,
    [RSAA]: {
      ...action[RSAA],
      headers: {
        ...action[RSAA].headers,
        'Content-Type': 'application/json',
      },
    },
  });
};
