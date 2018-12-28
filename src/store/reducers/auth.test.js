import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

describe('auth reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            error: null,
            loading: false,
            token: null
        });
    });;

    it('should store the token after success auth', () => {
        expect(reducer({
            error: null,
            loading: false,
            token: null
        }, {
            type: actionTypes.AUTH_SUCCESS,
            token: 'the-token'
        })).toEqual({
            error: null,
            loading: false,
            token: 'the-token'
        });
    });
});