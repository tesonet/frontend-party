import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import authentication from './authReducer';
import servers from './serversReducer';

const rootReducer = combineReducers({
    form: reduxFormReducer,
    auth: authentication,
    servers,
});

export default rootReducer;
