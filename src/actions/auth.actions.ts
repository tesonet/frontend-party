import axios from 'axios';
import {
    AUTHENTICATION_START,
    AUTHENTICATION_SUCCESS,
    AUTHENTICATION_ERROR,
    LOGOUT,
    LoginRequest
} from '../types';

const login = (username: string, password: string) => {

    return async (dispatch: any) => {
        try {

            dispatch({ type: AUTHENTICATION_START });

            const loginQuery = {
                username: username,
                password: password
            } as LoginRequest

            let response = await axios.post('/v1/tokens', loginQuery);

            if (response.status === 200) {

                setTimeout(() => {
                    // Slow down a bit for some UI elegance - ~pretent to load something
                    dispatch({ type: AUTHENTICATION_SUCCESS, payload: { ...response.data } });
                }, 900)

            } else {

                setTimeout(() => {

                    // Slow down a bit for some UI elegance - ~pretent to load something
                    dispatch({
                        type: AUTHENTICATION_ERROR,
                        payload: {
                            error: {
                                message: "Login failed - please check your username/password."
                            }
                        }
                    });

                    // console.error(response);

                }, 900)

            }

        } catch (error) {

            dispatch({
                type: AUTHENTICATION_ERROR,
                payload: {
                    error: {
                        message: "Was not able to login. Please try again."
                    }
                }
            });

            // console.error("Login: " + error);
        }
    }
};

const logout = () => {

    return async (dispatch: any) => {

        dispatch({
            type: LOGOUT
        });
    }
};

export const authActions = { login, logout };