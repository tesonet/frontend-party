import {LOGOUT, LOGIN} from './authActions'

const token = localStorage.getItem('token')
const isTokenExists = token !== 'null'

const initialState = {
    token: token,
    withAuth: isTokenExists
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                token: action.payload,
                withAuth: true
            }

        case LOGOUT:
            return {
                token: 'null',
                withAuth: false
            }
        default:
            return state
    }
}