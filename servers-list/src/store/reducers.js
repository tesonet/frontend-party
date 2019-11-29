
const initialState = {
    login: {
        username: '',
        password: ''
    },
    servers: {
        data: []
    },
    error: {
        value: false
    }
}

function loginInfo(state = initialState, action) {
    switch (action.type) {
        case 'USERNAME':
            return {...state, login: {...state.login, username: action.value}} ;
        case 'PASSWORD':
            return {...state, login: {...state.login, password: action.value}};
        case 'DATA_OBJECT':
            return {...state, servers: {data: action.value}};
        case 'LOGIN_ERROR':
            return {...state, error: {value: action.value}};
        default:
            return state;
    }
};

export default loginInfo;