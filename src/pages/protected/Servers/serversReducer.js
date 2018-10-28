import {
    FETCH_LIST_SUCCESS,
    ADD_TO_FAVOURITES,
    SORT_BY_NAME,
    SORT_BY_DISTANCE,
    REMOVE_FROM_FAVOURITES
} from './serversActions'

const initialState = {
    servers: [],
    favourites: [],
    sortdByNameAscending: false,
    sortdByDistanceAscending: false
}

export default (state = initialState, action) => {
    switch (action.type) {

        case FETCH_LIST_SUCCESS:
            return {
                ...state,
                servers: action.payload
            }

        case ADD_TO_FAVOURITES:
            return {
                ...state,
                favourites: state.favourites.filter(server => server.id === action.server.id).length ? state.favourites : [
                    ...state.favourites,
                    action.server
                ],
                servers: state.servers.map(server => {
                    if (server.name === action.server.name) {
                        return {
                            ...server,
                            favourite: true
                        }
                    }
                    return server
                })
            }

        case REMOVE_FROM_FAVOURITES:
            return {
                ...state,
                favourites: state.favourites.filter(server => server.name !== action.server.name),
                servers: state.servers.map(server => {
                    if (server.name === action.server.name) {
                        return {
                            ...server,
                            favourite: false
                        }
                    }
                    return server
                })

            }

        case SORT_BY_NAME:
            const sortedByName = state.sortdByNameAscending ? sortByNameDescending(state.servers) : sortByNameAscending(state.servers)
            return {
                ...state,
                sortdByNameAscending: !state.sortdByNameAscending,
                servers: sortedByName
            }

        case SORT_BY_DISTANCE:
            const sortedByDistance = state.sortdByDistanceAscending ? sortByDistanceDescending(state.servers) : sortByDistanceAscending(state.servers)
            return {
                ...state,
                sortdByDistanceAscending: !state.sortdByDistanceAscending,
                servers: sortedByDistance
            }

        default:
            return state
    }
}

const sortByNameAscending = servers => (servers.concat().sort((a, b) => {
    if (a.name < b.name)
        return -1
    if (a.name > b.name)
        return 1
    return 0
}))


const sortByNameDescending = servers => (servers.concat().sort((a, b) => {
    if (a.name > b.name)
        return -1
    if (a.name < b.name)
        return 1
    return 0
}))

const sortByDistanceAscending = servers => (servers.concat().sort((a, b) =>
    a.distance - b.distance || a.distance - b.distance)
)

const sortByDistanceDescending = servers => (servers.concat().sort((a, b) =>
    b.distance - a.distance || b.distance - a.distance)
)
