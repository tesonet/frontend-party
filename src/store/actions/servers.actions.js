import axios from "axios";
import * as actionTypes from "../constants/servers.constants";

export const serversRequest = () => {
    return {
        type: actionTypes.SERVERS_REQUEST
    };
};

export const serversSuccess = data => {
    return {
        type: actionTypes.SERVERS_SUCCESS,
        data
    };
};

export const serversFailure = error => {
    return {
        type: actionTypes.SERVERS_FAILURE,
        error
    };
};

export const serversSortByName = data => {
    return {
        type: actionTypes.SERVERS_NAME_SORT,
        data
    };
};

export const serversSortByNameAsc = () => {
    return {
        type: actionTypes.SERVERS_NAME_SORT_ASC
    };
};

export const serversSortByNameDsc = () => {
    return {
        type: actionTypes.SERVERS_NAME_SORT_DSC
    };
};

export const serversSortByDistance = data => {
    return {
        type: actionTypes.SERVERS_DISTANCE_SORT,
        data
    };
};

export const serversSortByDistanceAsc = () => {
    return {
        type: actionTypes.SERVERS_DISTANCE_SORT_ASC
    };
};

export const serversSortByDistanceDsc = () => {
    return {
        type: actionTypes.SERVERS_DISTANCE_SORT_DSC
    };
};

export const nameSort = () => {
    return (dispatch, getState) => {
        const state = getState();
        const servers = state.servers.data;
        const sorted = state.servers.nameSortAsc
            ? servers.sort((a, b) => a.name.localeCompare(b.name))
            : servers.sort((a, b) => b.name.localeCompare(a.name));

        dispatch(serversSortByName(sorted));
    };
};

export const distanceSort = () => {
    return (dispatch, getState) => {
        const state = getState();
        const servers = state.servers.data;
        const sorted = state.servers.distanceSortAsc
            ? servers.sort((a, b) => a.distance - b.distance)
            : servers.sort((a, b) => b.distance - a.distance);

        dispatch(serversSortByDistance(sorted));
    };
};

export const getServers = () => {
    return dispatch => {
        dispatch(serversRequest());

        const request = {
            method: "GET",
            url: "http://playground.tesonet.lt/v1/servers",
            headers: {
                Authorization: localStorage.getItem("token"),
                "content-type": "application/json;"
            }
        };

        axios(request)
            .then(response => {
                dispatch(serversSuccess(response.data));
            })
            .catch(error => {
                dispatch(serversFailure(error));
            });
    };
};
