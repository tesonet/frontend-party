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
            response => {
                let data = JSON.stringify({
                    date: new Date(),
                    data: response
                });
                localStorage.data = data;
                dispatch(dataLoadSuccess(response));
            }
        ).catch(error => {
            let data = localStorage.getItem('data');
            if(data)
                dispatch(dataLoadSuccess(JSON.parse(data).data)); 
            else
                dispatch(dataLoadError(error));
        });
