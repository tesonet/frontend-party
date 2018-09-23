import * as aT from "./../actions/actionTypes.js";

const initialState = {
	data: null,
	error: null,
	isFetching: false,
};

function requestServerList(state, action) {
	return { ...state, isFetching: true, error: null };
}

function requestServerListSuccess(state, action) {
	return { ...state, isFetching: false, data: action.data, error: null };
}

function requestServerListFail(state, action) {
	return { ...state, isFetching: false, error: action.error };
}

export default function(state = initialState, action) {
	switch (action.type) {
		case aT.REQUEST_SERVER_LIST:
			return requestServerList(state, action);
		case aT.REQUEST_SERVER_LIST_SUCCESS:
			return requestServerListSuccess(state, action);
		case aT.REQUEST_SERVER_LIST_FAIL:
			return requestServerListFail(state, action);
		default:
			return state;
	}
}
