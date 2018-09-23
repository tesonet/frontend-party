import * as aT from "./actionTypes.js";
import axios from "axios";
import { SERVER_LIST_URL } from "./../../config/global_conts.js";

export const requestServerList = () => ({
	type: aT.REQUEST_SERVER_LIST,
});

export const requestServerListSuccess = data => ({
	type: aT.REQUEST_SERVER_LIST_SUCCESS,
	data,
});

export const requestServerListFail = error => ({
	type: aT.REQUEST_SERVER_LIST_FAIL,
	error,
});

export const fetchServerList = () => {
	return (dispatch, getState) => {
		const token = getState().auth.token;
		dispatch(requestServerList());
		return axios
			.get(SERVER_LIST_URL, { headers: { "content-type": "application/json", authorization: token } })
			.then(response => {
				dispatch(requestServerListSuccess(response.data));
				return response.data;
			})
			.catch(error => {
				dispatch(requestServerListFail(error));
				return Promise.reject(error);
			});
	};
};
