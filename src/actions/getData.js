import { DATA_LOAD_SUCCESS, DATA_LOAD_ERROR } from '../types/typesData';
import api from '../api';

export const dataLoadSuccess = data => ({
    type: DATA_LOAD_SUCCESS,
    data
});
export const dataLoadError = data => ({
    type: DATA_LOAD_ERROR,
    data
});

export const getData = () =>
    dispatch => api.user.getData()
        .then(
            data => {
                dispatch(dataLoadSuccess(data));
            }
        ).catch(error => {
            dispatch(dataLoadError(error));
        });
