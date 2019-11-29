export function usernameValue(username) {
    return {
        type: 'USERNAME',
        value: username
    }
}

export function passwordValue(password) {
    return {
        type: 'PASSWORD',
        value: password
    }
}

export function dataObject(obj) {
    return {
        type: 'DATA_OBJECT',
        value: obj
    }
}

export function loginError(bool) {
    return {
        type: 'LOGIN_ERROR',
        value: bool
    }
}