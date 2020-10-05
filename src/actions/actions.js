import {
	USER_AUTH_SUCCESS,
	USER_AUTH_PENDING,
	USER_AUTH_FAILED,
	USER_AUTH_ERROR,
	USER_LOGOUT,
	RETRIEVED_DATA,
	RETRIEVE_DATA_FAILED,
} from './constants';

export const userAuthentication = (loginOptions) => {
	return function (dispatch) {
		// CHECKING IF USER IS LOGGING IN IR OUT
		if (loginOptions) {
			// SETTING STATUS TO PENDING TO ENABLE LOADING ANIMATIONS
			dispatch({ type: USER_AUTH_PENDING });
			fetch('https://playground.tesonet.lt/v1/tokens', loginOptions)
				.then((response) => {
					// USER REACHED THE SERVER CHEKING IF CREDENTIALS ARE CORRECT
					response.status === 401
						? dispatch({ type: USER_AUTH_FAILED })
						: response
								.json()
								.then((data) => {
									const localToken = localStorage.getItem('token');
									// SAVING RECEIVED TOKEN TO LOCAL STORAGE
									localToken === null &&
										localStorage.setItem('token', data.token);
								})
								.then(() => dispatch({ type: USER_AUTH_SUCCESS }));
				})
				.catch((error) => {
					dispatch({ type: USER_AUTH_ERROR, payload: error });
				});
		} else {
			dispatch({ type: USER_LOGOUT });
			localStorage.clear();
		}
	};
};

export const fetchData = (requestDataOptions) => {
	return function (dispatch) {
		fetch(`https://playground.tesonet.lt/v1/servers`, requestDataOptions)
			.then((response) => response.json())
			.then((data) => dispatch({ type: RETRIEVED_DATA, payload: data }))
			.catch((error) => {
				dispatch({ type: RETRIEVE_DATA_FAILED, payload: error });
			});
	};
};
