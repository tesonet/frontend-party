import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateRoute({ component: Component }) {
	const storedToken = localStorage.getItem('token');
	let isLoggedIn = useSelector((state) => state.userAuthentication.isLoggedIn);

	return (
		<Route
			render={(props) => {
				// BEFORE ALLOWING TO VISIT PRIVATE ROUTE CHEKING IF USER STATUS IS LOGGED IN OR USER HAS A TOKEN IN LOCAL STORAGE
				if (isLoggedIn || storedToken) {
					return <Component {...props} />;
				}
				return (
					<Redirect to={{ pathname: '/', state: { from: props.location } }} />
				);
			}}
		/>
	);
}

export default PrivateRoute;
