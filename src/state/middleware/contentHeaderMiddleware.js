import { isRSAA, RSAA } from 'redux-api-middleware';

export default () => {
  return next => {
    return action => {
      if (!isRSAA(action)) {
        return next(action);
      }

      return next({
        ...action,
        [RSAA]: {
          ...action[RSAA],
          headers: {
            ...action.headers,
            'Content-Type': 'application/json',
          },
        },
      });
    };
  };
};
