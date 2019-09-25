import { SERVER_FETCH_ACTION_TYPES, SERVER_ERROR_TYPES } from '../constants/types';
import { getServersList } from '../api/teso';

const serversFetchSuccess = payload => ({
    type: SERVER_FETCH_ACTION_TYPES.FETCH_SUCCESS,
    payload
});

const serversFetchPending = () => ({
    type: SERVER_FETCH_ACTION_TYPES.FETCH_PENDING
});

const serversFetchFail = payload => ({
    type: SERVER_FETCH_ACTION_TYPES.FETCH_FAIL,
    payload
});

export const serversList = userToken => async dispatch => {
    dispatch(serversFetchPending());
    const response = await getServersList(userToken);

    if (response && response.ok) {
        const data = await response.json();

        dispatch(serversFetchSuccess(data));
    } else {
        dispatch(serversFetchFail(SERVER_ERROR_TYPES.UNKNOWN));
    }
};
