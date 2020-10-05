import React from 'react';
import { ReactComponent as LoadingIcon } from '../assets/images/server-loading-icon.svg';

const SplashScreen = () => {
	return (
		<div className="splash">
			<div className="splash__indicator">
				<LoadingIcon />
			</div>
			<p className="splash__text">Loading server list...</p>
		</div>
	);
};

export default SplashScreen;
