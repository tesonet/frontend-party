import {push} from 'react-router-redux';

import auth from '~/auth';


export const loggedOutEpic = (action$, store) =>
  action$.ofType(auth.actionTypes.LOGGED_OUT)
    .subscribe(() => {
      store.dispatch(push('/'));
    });
