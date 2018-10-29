import { AUTHORIZE, LOGOUT, LOGIN_SUCCESS } from './pages/AuthPage/authActions'
import axiosInstance from './axios/instance'

export const localStorageMiddleware = store => next => action => {
    switch ((action.type)) {
        case AUTHORIZE:
            localStorage.getItem('token')
            break
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload)
            axiosInstance.defaults.headers.common['Authorization'] = action.payload
            break
        case LOGOUT:
            localStorage.removeItem('token')
            break
    }
    next(action)
}




