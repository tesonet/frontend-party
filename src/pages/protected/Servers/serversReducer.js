import {FETCH_LIST_SUCCESS, ADD_TO_FAVORITES} from './serversActions'

const initialState = {
    servers: [],
    favorites: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LIST_SUCCESS:
            return {
                ...state,
                servers: action.payload.data
            }
        case ADD_TO_FAVORITES:
            return {
                ...state,
                favorites: [
                    ...state.favorites,
                    action.server
                ]
            }

        default:
            return state
    }
}