import { createAction } from 'redux-actions';
import { push } from 'connected-react-router';

export const SET_TOKEN = 'SESSION__SET_TOKEN';
export const LOGOUT = 'SESSION__LOGOUT';

const actions = {
    setToken: createAction(SET_TOKEN),
    logout: createAction(LOGOUT),
};

export default {
    setToken: actions.setToken,
    logout: () => (dispatch) => {
        dispatch(actions.logout());
        dispatch(push('public/login'));
    },
};
