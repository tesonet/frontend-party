import React from 'react';
import { TestioLogo } from './TestioLogo';
import { Logout } from './Logout';

export const PageHeader = ({ handleLogout, logo }) => (
    <div className="page-header-container">
		<TestioLogo logo={logo}/>
	   	<Logout handleLogout={handleLogout}/>
	</div>
)