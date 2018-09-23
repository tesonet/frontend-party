import * as aT from "./../actions/actionTypes.js";

const initialState = {
	token: null,
	error: null,
	isLoggingIn: false,
};

function authStart(state, action) {
	return { ...state, error: null, isLoggingIn: true };
}

function authSuccess(state, action) {
	return { ...state, error: null, isLoggingIn: false, token: action.token };
}

function authFail(state, action) {
	return { ...state, error: action.error, isLoggingIn: false };
}

function authLogout(state, action) {
	return { ...state, error: null, isLoggingIn: false, token: null };
}

function authClearError(state, action) {
	return { ...state, error: null, isLoggingIn: false };
}

export default function(state = initialState, action) {
	switch (action.type) {
		case aT.AUTH_START:
			return authStart(state, action);
		case aT.AUTH_SUCCESS:
			return authSuccess(state, action);
		case aT.AUTH_FAIL:
			return authFail(state, action);
		case aT.AUTH_LOGOUT:
			return authLogout(state, action);
		case aT.AUTH_CLEAR_ERROR:
			return authClearError(state, action);
		default:
			return state;
	}
}
