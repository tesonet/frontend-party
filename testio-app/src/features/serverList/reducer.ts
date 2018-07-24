import { LOGIN_TOGGLER } from 'features/user/constants';
import { combineReducers } from 'redux';
import { handleAction } from 'redux-actions';
import { addByUid, addUids, updateSimpleValue } from 'utils/createReducer';
import { SET_ERROR, SET_LIST, SET_LOADER } from './constants';
import { IList } from './types';

const byUidReducer = handleAction(SET_LIST, addByUid, {});
const idsReducer = handleAction(SET_LIST, addUids, []);
const errorReducer = handleAction(SET_ERROR, updateSimpleValue, false);
const loaderReducer = handleAction(SET_LOADER, updateSimpleValue, false);

const serverListReducer = combineReducers<IList>({
  byUid: byUidReducer,
  uids: idsReducer,
  // tslint:disable-next-line:object-literal-sort-keys
  error: errorReducer,
  isLoading: loaderReducer
});

export default (state: any, action: IAction<boolean>) =>
  serverListReducer(
    action.type === LOGIN_TOGGLER && !action.payload ? undefined : state,
    action
  );
