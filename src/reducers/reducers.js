import {
	USER_AUTH_PENDING,
	USER_AUTH_SUCCESS,
	USER_AUTH_FAILED,
	USER_AUTH_ERROR,
	RETRIEVED_DATA,
	RETRIEVE_DATA_FAILED,
	USER_LOGOUT,
} from '../actions/constants';

const initialUserState = {
	isPending: false,
	isLoggedIn: false,
	wrongCredentials: false,
	loginError: false,
};

export const userAuthentication = (state = initialUserState, action) => {
	switch (action.type) {
		case USER_AUTH_PENDING:
			return { ...state, wrongCredentials: false, isPending: true };
		case USER_AUTH_SUCCESS:
			return { ...state, isLoggedIn: true, isPending: false };
		case USER_AUTH_FAILED:
			return { ...state, wrongCredentials: true, isPending: false };
		case USER_AUTH_ERROR:
			return { ...state, loginError: true, isPending: false };
		case USER_LOGOUT:
			return { ...state, isLoggedIn: false };
		default:
			return state;
	}
};

const initialServerList = {
	servers: [],
	fetchDataError: false,
};

export const fetchData = (state = initialServerList, action) => {
	switch (action.type) {
		case RETRIEVED_DATA:
			return { ...state, servers: action.payload };
		case RETRIEVE_DATA_FAILED:
			return { ...state, fetchDataError: true };
		default:
			return state;
	}
};
