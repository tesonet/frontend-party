import { LOGIN_TOGGLER } from 'features/user/constants';
import { combineReducers } from 'redux';
import { handleAction } from 'redux-actions';
import { addByUid, addUids } from 'utils/createReducer';
import { SET_LIST } from './constants';
import { IList } from './types';

const byUidReducer = handleAction(SET_LIST, addByUid, {});
const idsReducer = handleAction(SET_LIST, addUids, []);

const serverListReducer = combineReducers<IList>({
  byUid: byUidReducer,
  uids: idsReducer
});

export default (state: any, action: IAction<boolean>) =>
  serverListReducer(
    action.type === LOGIN_TOGGLER && !action.payload ? undefined : state,
    action
  );
