import { AUTH_USER } from '../actions/constants';

const initialState = {};

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'AUTH_USER':
			console.log('Selected coordinates', action.payload);
			return { ...state, isLogged: action.payload };

		default:
			return state;
	}
};

export default authReducer;
