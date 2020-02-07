const initState = {
    credentials: {},
    servers: [],
    preloader: false,
    failedLogin: false,
    isLoggedIn: false
}

const generalReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_CREDENTIALS':
            return {
                ...state,
                credentials: action.payload
            }
        case 'SET_SERVERS':
            return {
                ...state,
                servers: action.payload
            }
        case 'SET_PRELOADER':
            return {
                ...state,
                preloader: action.payload
            }
        case 'SET_FAILED_LOGIN':
            return {
                ...state,
                failedLogin: action.payload
            }
        case 'SET_IS_LOGGED_IN':
            return {
                ...state,
                isLoggedIn: action.payload
            }
        default:
            return state
    }
}

export default generalReducer;