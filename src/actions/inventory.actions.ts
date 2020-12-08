import axios from 'axios';
import {
    GET_SERVERS_START,
    GET_SERVERS_SUCCESS,
    GET_SERVERS_ERROR,
    LAST_USER_API_KEY
} from '../types';

const getServers = () => {

    return async (dispatch: any) => {
        try {

            dispatch({ type: GET_SERVERS_START });

            let response = await axios.get('/v1/servers', { headers: { 'Authorization': 'Bearer ' + localStorage.getItem(LAST_USER_API_KEY), 'Content-Type': 'application/json' } });

            if (response.status === 200) {

                // Nest servers array into deeper payload attribute - to be able to extend the payload in the future more easily

                setTimeout(() => {
                    dispatch({ type: GET_SERVERS_SUCCESS, payload: { servers: [...response.data] } });
                }, 900)

            } else {

                dispatch({ type: GET_SERVERS_ERROR, payload: { message: "Error occurred!" } });
                // console.error("Login: Some weird non 200 code case happened...");
                // console.error(response);

            }

        } catch (error) {
            dispatch({ type: GET_SERVERS_ERROR, payload: { message: "Was not able to fetch servers inventory" } });
            // console.error("getServers: " + error);
        }
    }
};

export const inventoryActions = { getServers };