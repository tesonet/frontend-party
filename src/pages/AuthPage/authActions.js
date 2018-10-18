export const AUTHORIZE = '[AUTH]AUTHORIZE'
export const LOGIN = '[AUTH]LOGIN'
export const LOGOUT = '[AUTH]LOGOUT'

const login = token => ({
    type: LOGIN,
    payload: token,
});

const logOut = () => ({
    type: LOGOUT
})

export {login, logOut}