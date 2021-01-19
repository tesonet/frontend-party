import {SET_LOGGED_IN, SET_SERVER_LIST} from "./action-types";


export const setLogged = is_logged_in => ({type: SET_LOGGED_IN, payload: is_logged_in});

export const setServerList = server_list => ({type: SET_SERVER_LIST, payload: server_list});
