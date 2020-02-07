import actionList from "./actionList";

const validateAndAuthenticate = (response, history, dispatch) => {
    if (response && response.token) {
        localStorage.setItem('token', response.token)
        dispatch(actionList.setFailedLogin(false))
        dispatch(actionList.setIsLoggedIn(true))
        history.push('/home');
    } else {
        dispatch(actionList.setFailedLogin(true))
    }
}

export {
    validateAndAuthenticate
}