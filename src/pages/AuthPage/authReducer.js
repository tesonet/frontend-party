import { LOGOUT, LOGIN_SUCCESS, LOGIN_ERROR, CLEAR_LOGIN_ERROR } from './authActions'

const token = localStorage.getItem('token')
const isTokenExists = token !== 'null'

const initialState = {
    token: token,
    withAuth: isTokenExists,
    loginError: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                token: action.payload,
                withAuth: true
            }

        case LOGIN_ERROR:
            return {
                ...state,
                loginError: true
            }

        case CLEAR_LOGIN_ERROR:
            return {
                ...state,
                loginError: false
            }

        case LOGOUT:
            return {
                ...state,
                token: 'null',
                withAuth: false
            }
        default:
            return state
    }
}