import types from '../types/serversTypes';
import ServersClient from '../services/ServersClient';

const getServers = (token) => async (dispatch) => {
    dispatch({ type: types.SERVERS_REQUEST });
    const client = new ServersClient();

    try {
        const response = await client.getServers(token);
        dispatch({ type: types.SERVERS_SUCCESS, response: response.data });
    } catch (error) {
        dispatch({ type: types.SERVERS_FAILURE });
    }
};

export default { getServers };
