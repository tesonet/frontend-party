import { AUTH_USER } from './constants';

export const authentication = (bool) => ({
	type: 'AUTH_USER',
	payload: bool,
});

// export const measureDistance = (length) => ({
// 	type: 'MEASURE_DISTANCE',
// 	payload: length,
// });
