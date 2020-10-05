import {
	USER_AUTH_SUCCESS,
	USER_AUTH_PENDING,
	USER_AUTH_FAILED,
	RETRIEVED_DATA,
	USER_LOGOUT,
} from './constants';

export const userAuthentication = (loginOptions) => {
	return function (dispatch) {
		if (loginOptions) {
			dispatch({ type: USER_AUTH_PENDING });
			fetch('https://playground.tesonet.lt/v1/tokens', loginOptions).then(
				(response) => {
					response.status === 401
						? dispatch({ type: USER_AUTH_FAILED })
						: response
								.json()
								.then((data) => {
									const localToken = localStorage.getItem('token');
									localToken === null &&
										localStorage.setItem('token', data.token);
								})
								.then(() => dispatch({ type: USER_AUTH_SUCCESS }))

								.catch((error) => {
									console.log('error', error);
								});
				}
			);
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
				console.log('fetchData error', error);
			});
	};
};
