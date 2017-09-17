import { combineEpics } from 'redux-observable';
import { serversEpic } from './serversEpic';
import { tokenEpic } from './tokenEpic';

export default combineEpics(
  tokenEpic,
  serversEpic,
);
