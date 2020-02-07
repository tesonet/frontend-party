import generalReducer from './generalReducer';
import tableReducer from './tableReducer';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    generalReducer:generalReducer,
    tableReducer: tableReducer
})

export default rootReducer