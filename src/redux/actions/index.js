/**
 ********* Actions
 **/

export const SET_USER = 'SET_USER';
export const REMOVE_USER = 'REMOVE_USER';


/**
 ********* Action Creators
 **/

export function setUser({ user }) {
    return {
        type: SET_USER,
        user,
    };
}

export function logoutUser() {
    return {
        type: REMOVE_USER,
    };
}
