import {requestLogIn, userLogout, userLoggedIn, userLoginError} from '../auth_actions'
describe('Auth actions', () => {
    it('should create action to request log in', () => {
        const expected = {
            type: 'REQUEST_LOGIN'
        }
        expect(requestLogIn()).toEqual(expected)
    })

    it('should create action to logout', () => {
        const expected = {
            type: 'LOG_OUT'
        }
        expect(userLogout()).toEqual(expected)
    })

    it('should create action to store token', () => {
        const expected = {
            type: 'LOGGED_IN',
            token: 'test'
        }
        expect(userLoggedIn('test')).toEqual(expected)
    })

    it('should create action to pass error', () => {
        const expected = {
            type: 'ERROR',
            err: new Error('test')
        }

        expect(userLoginError(new Error('test'))).toEqual(expected)
    })
})