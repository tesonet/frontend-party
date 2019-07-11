import { combineReducers } from 'redux';
import auth, { AuthState } from './ducks/auth.duck';

export type RootState = {
    session: AuthState;
};

const rootReducer = combineReducers({
    session: auth,
});

export default rootReducer;
