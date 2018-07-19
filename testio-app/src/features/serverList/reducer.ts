import { combineReducers } from 'redux';
import { handleAction } from 'redux-actions';
import { addByUid, addUids } from '../../utils/createReducer';
import { SET_LIST } from './constants';
import { IList } from './types'

const byUidReducer = handleAction(SET_LIST, addByUid, {});
const idsReducer = handleAction(SET_LIST, addUids, []);

export default combineReducers<IList>({
    byUid: byUidReducer,
    uids: idsReducer
});
