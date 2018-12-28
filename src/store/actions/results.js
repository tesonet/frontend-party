import * as actionTypes from './actionTypes';
import axios from 'axios';


export const setResults = (data) => {
    return {
        type: actionTypes.SET_RESULTS_SUCCESS,
        data: data
    };
}

export const setResultFail = (error) => {
    return {
        type: actionTypes.SET_RESULTS_FAIL,
        error: error
    };
};

export const initGetResultStart = () => {
    return {
        type: actionTypes.SET_RESULTS_START
    };
}

export const getResult = () => {
    return dispatch => {
        dispatch(initGetResultStart());

        const token = localStorage.getItem('token');
        const url = 'http://playground.tesonet.lt/v1/servers';

        axios({
            method: 'GET',
            url: url,
            headers: { "Authorization": token, 'content-type': 'application/json;' }            
        }).then(response => {
            // Ascending order by  distance
            response.data.sort((a,b) => (b.distance > a.distance) ? 1 : ((a.distance > b.distance) ? -1 : 0));
            // Ascending order by name
            response.data.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
            dispatch(setResults(response.data));
        }).catch(error => {
            dispatch(setResultFail(error));
        });      

    };
};