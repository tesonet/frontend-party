import {AUTHORIZE, LOGOUT, LOGIN} from './pages/AuthPage/authActions'

export const localStorageMiddleware = store => next => action => {
    console.log(action);
    switch ((action.type)) {
        case AUTHORIZE:
            localStorage.getItem('token')
            break
        case LOGIN:
            localStorage.setItem('token', action.payload)
            break
        case LOGOUT:
            localStorage.removeItem('token')
    }
    next(action);
};


