import React from 'react';
import { ReactComponent as LoadingIcon } from '../assets/images/server-loading-icon.svg';

const SplashScreen = ({ fetchDataError }) => {
	return (
		<div className="splash">
			<div className="splash__indicator">
				<LoadingIcon />
			</div>
			{!fetchDataError ? (
				<p className="splash__text">Loading server list...</p>
			) : (
				<div className="splash__error">
					Sorry, could not load the server list, please try again later.
				</div>
			)}
		</div>
	);
};

export default SplashScreen;
