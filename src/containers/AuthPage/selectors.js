/**
 * Auth page selectors
 */

import { createSelector } from 'reselect';

const selectAuth = (state) => state.get('auth');

const makeSelectToken = () => createSelector(
  selectAuth,
  (authState) => authState.get('token')
);

const makeSelectLoading = () => createSelector(
  selectAuth,
  (authState) => authState.get('loading')
);

const makeSelectError = () => createSelector(
  selectAuth,
  (authState) => authState.get('error')
);

export {
  selectAuth,
  makeSelectToken,
  makeSelectLoading,
  makeSelectError,
};
