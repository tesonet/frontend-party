import {CLEAR_SERVERS, FETCH_SERVERS} from "./index";
import {LOCAL_STORAGE_TOKEN_KEY} from "../constants/auth.constants";

export const fetchServers = () => (dispatch: any) => {
    const token = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);

    fetch(`${process.env.REACT_APP_API_URL}servers`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    }).then(res => res.json())
        .catch(error => {
            dispatch({
                type: FETCH_SERVERS,
                payload: [],
                isLoading: false
            })
        })
        .then(servers => dispatch({
            type: FETCH_SERVERS,
            payload: servers,
            isLoading: false
        }));
};

export const clearServers = () => (dispatch: any) => {
    dispatch({
        type: CLEAR_SERVERS
    })
};
