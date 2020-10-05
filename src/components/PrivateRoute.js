import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateRoute({ component: Component }) {
	const storedToken = localStorage.getItem('token');

	let isLoggedIn = useSelector((state) => state.userAuthentication.isLoggedIn);

	return (
		<Route
			render={(props) => {
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
