import { handleActions } from 'redux-actions';
import { setServersList, setServersLoading, setServersFailToLoad } from './actions';

const initialState = {
    list: [],
    loading: false,
    failedToLoad: false
};

export default handleActions({
    [setServersList]: (state, { payload }) => ({
        ...state,
        list: payload
    }),
    [setServersLoading]: (state, { payload }) => ({
        ...state,
        loading: payload
    }),
    [setServersFailToLoad]: (state, { payload }) => ({
        ...state,
        failedToLoad: payload
    })
}, initialState);
