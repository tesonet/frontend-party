import axios from "axios";
import * as aT from "./actionTypes";
import { AUTH_URL } from "./../../config/global_conts.js";

export const authStart = () => ({
	type: aT.AUTH_START,
});

export const authSuccess = token => ({
	type: aT.AUTH_SUCCESS,
	token: token,
});

export const authFail = error => ({
	type: aT.AUTH_FAIL,
	error: error,
});

export const authClearError = () => ({
	type: aT.AUTH_CLEAR_ERROR,
});

const TOKEN = "token";
const ERROR_MESSAGE = "Wrong username or password";
export const logout = () => {
	localStorage.removeItem(TOKEN);
	return {
		type: aT.AUTH_LOGOUT,
	};
};
export const auth = (username, password) => {
	return dispatch => {
		dispatch(authStart());
		return axios
			.post(AUTH_URL, { username, password }, { headers: { "content-type": "application/json" } })
			.then(response => {
				localStorage.setItem(TOKEN, response.data.token);
				dispatch(authSuccess(response.data.token));
				return response.data.token;
			})
			.catch(error => {
				dispatch(authFail(ERROR_MESSAGE));
				return Promise.reject(ERROR_MESSAGE);
			});
	};
};

export const authCheck = () => {
	return dispatch => {
		const token = localStorage.getItem(TOKEN);
		if (!token) {
			dispatch(logout());
		} else {
			dispatch(authSuccess(token));
		}
	};
};
