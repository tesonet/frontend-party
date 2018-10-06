import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import sessionReducer from 'app/pages/private/session/redux/reducer';

const appReducer = combineReducers({
    form: formReducer,
    session: sessionReducer,
});

export default (state, action) => appReducer(state, action);
