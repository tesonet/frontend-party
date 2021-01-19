import {SERVERS} from "../config/api-endpoints";


export function fetchServerList(token) {

    const params = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    };

    return fetch(SERVERS, params).then(response => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
    })
}
