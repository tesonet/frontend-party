import { combineReducers } from 'redux';
import { handleAction } from 'redux-actions';

import { TEST } from './constants';

export const updateSimpleValue = (state: any, { payload }: any) => payload;
const testReducer = handleAction(TEST, updateSimpleValue, '');

export default combineReducers({
    test: testReducer
});