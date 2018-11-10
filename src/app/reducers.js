import { combineReducers } from 'redux';

import login from '../login/reducers';

const rootReducer = combineReducers({
    login
});

export default rootReducer;
