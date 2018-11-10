import { handleActions } from 'redux-actions';
import { setServers } from './actions';

const initialState = {
    list: []
};

export default handleActions({
    [setServers]: (state, { payload }) => ({
        ...state,
        list: payload
    })
}, initialState);
