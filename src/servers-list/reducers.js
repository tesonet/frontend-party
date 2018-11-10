import { handleActions } from 'redux-actions';
import { setServersList, setServersLoading } from './actions';

const initialState = {
    list: [],
    loading: false
};

export default handleActions({
    [setServersList]: (state, { payload }) => ({
        ...state,
        list: payload
    }),
    [setServersLoading]: (state, { payload }) => ({
        ...state,
        loading: payload
    })
}, initialState);
