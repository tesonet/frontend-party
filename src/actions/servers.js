import { SERVER_FETCH_ACTION_TYPES } from '../constants/actionTypes';
import { SERVER_ERROR_TYPES } from '../constants/serverErrorTypes';
import { getServersList } from '../api/teso';

const serversFetchSuccess = servers => ({
    type: SERVER_FETCH_ACTION_TYPES.FETCH_SUCCESS,
    payload: { servers }
});

const serversFetchPending = () => ({
    type: SERVER_FETCH_ACTION_TYPES.FETCH_PENDING
});

const serversFetchFail = error => ({
    type: SERVER_FETCH_ACTION_TYPES.FETCH_FAIL,
    payload: { error }
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
