import axios from "axios";
import { navigate } from "@reach/router";
import * as actionTypes from "../constants/auth.constants";

export const loginRequest = () => {
    return {
        type: actionTypes.AUTH_LOGIN
    };
};

export const loginSuccess = token => {
    return {
        type: actionTypes.AUTH_LOGIN_SUCCESS,
        token
    };
};

export const loginFailure = error => {
    return {
        type: actionTypes.AUTH_LOGIN_FAILURE,
        error
    };
};

export const logout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const handleLogin = (username, password) => {
    const request = {
        method: "post",
        url: "http://playground.tesonet.lt/v1/tokens",
        data: { username, password },
        contentType: "application/x-www-form-urlencoded"
    };

    return dispatch => {
        dispatch(loginRequest());

        axios(request)
            .then(response => {
                dispatch(loginSuccess(response.data.token));
                localStorage.setItem("token", response.data.token);
                navigate("/servers");
            })
            .catch(error => {
                dispatch(loginFailure(error));
            });
    };
};

export const handleLogout = () => {
    return dispatch => {
        dispatch(logout());
        localStorage.clear();
        navigate("/");
    };
};
