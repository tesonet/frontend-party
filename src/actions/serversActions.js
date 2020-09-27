import types from '../types/serversTypes';
import createServersMethods from '../services/createServersMethods';

const getServers = (token) => async (dispatch) => {
    dispatch({ type: types.SERVERS_REQUEST });
    const client = createServersMethods();

    try {
        const response = await client.getServers(token);
        dispatch({ type: types.SERVERS_SUCCESS, response: response.data });
    } catch (error) {
        dispatch({ type: types.SERVERS_FAILURE });
    }
};

export default { getServers };
