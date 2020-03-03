import axios from 'axios';

export const signIn = (credentials) => {
    return (dispatch, getState) => {
        axios.post('http://playground.tesonet.lt/v1/tokens', credentials)
            .then((response) => {
                dispatch({ type: 'LOGIN_SUCCESS', response });
            })
            .catch((err) => {
                dispatch({ type: 'LOGIN_ERROR', err})
            })
    }
}

export const signOut = () => {
    return (dispatch, getState) => {
        localStorage.removeItem('state');
        dispatch({ type: 'LOGOUT_SUCCESS'});
    }
}