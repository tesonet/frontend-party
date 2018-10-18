import axios from 'axios'

export const FETCH_LIST_START = '[ASYNC]FETCH_LIST_START'
export const FETCH_LIST_SUCCESS = '[ASYNC]FETCH_LIST_SUCCESS'
export const FETCH_LIST_ERROR = '[ASYNC]FETCH_LIST_ERROR'

export const ASINC_ACTION_START = '[ASYNC]ASINC_ACTION_START'
export const ASINC_ACTION_END = '[ASYNC]ASINC_ACTION_END'


export const ADD_TO_FAVORITES = '[ADD_TO_FAVORITES'
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES'

const listUrl = 'http://playground.tesonet.lt/v1/servers'

const fetchList = () => (
    async (dispatch) => {
        try {
            const config = {
                method: 'get',
                url: listUrl,
                headers: {'Authorization': localStorage.getItem('token')}
            }

            const response = await axios(config)
            dispatch({
                type: FETCH_LIST_SUCCESS,
                payload: response
            })

        } catch (e) {
            dispatch({
                type: FETCH_LIST_ERROR,
                error: e
            })
        }
    }
)

const addToFavorites = (server) => ({
    type: ADD_TO_FAVORITES,
    server
})

const removeFromFavorites = (id) => ({
    type: REMOVE_FROM_FAVORITES,
    id: id
})

export {addToFavorites, removeFromFavorites, fetchList}
