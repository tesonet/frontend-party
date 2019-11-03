/**
 ********* Actions
 **/

export const SET_USER = 'SET_USER';


/**
 ********* Action Creators
 **/


export function setUser({ user }) {
    return {
        type: SET_USER,
        user,
    };
}
