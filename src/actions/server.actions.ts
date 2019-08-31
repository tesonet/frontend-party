import {FETCH_SERVERS} from "./index";
import {localStorageKey} from "../constants/auth.constants";

export const fetchServers = () => (dispatch: any) => {
    const token = localStorage.getItem(localStorageKey);

    fetch('http://playground.tesonet.lt/v1/servers', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    }).then(res => res.json())
        .then(servers => dispatch({
            type: FETCH_SERVERS,
            payload: servers,
            isLoading: false
        }));
};
