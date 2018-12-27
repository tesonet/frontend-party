import * as actionTypes from './actionTypes';
import axios from 'axios';
import $ from 'jquery';


export const setResults = (data) => {
    return {
        type: actionTypes.SET_RESULTS,
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

// async
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
            dispatch(setResults(response.data));


            // this.setState({ data: response.data})
            // // Ascending order by  distance
            // this.state.data.sort((a,b) => (b.distance > a.distance) ? 1 : ((a.distance > b.distance) ? -1 : 0));
            // // Ascending order by name
            // this.state.data.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
            // // Loppinng in array and posting table cells one by one
            // for (let i = 0; i < this.state.data.length; i++) {
            //     $('.table-results').append('<tr><td class="table-results-left">' + this.state.data[i].name + '</td><td class="table-results-right">' + this.state.data[i].distance + ' Km</td></tr>');
            // };          
        }).catch(error => {
            dispatch(setResultFail(error));
            console.log('error loading data');
        });      

    };
};