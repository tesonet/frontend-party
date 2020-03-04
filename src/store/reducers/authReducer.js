const initState = {
    authError: null,
    authToken: null
};

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: 'Login failed: Invalid username or password.'
            }
        case 'LOGIN_SUCCESS':
            let token = action.response.data.token;
            return {
                ...state,
                authError: null,
                authToken: token
            }
        case 'LOGOUT_SUCCESS':
            return {
                ...state,
                authError: null,
                authToken: null
            }
        default:
            return state;
    }
}

export default authReducer;