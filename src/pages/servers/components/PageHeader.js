import React from 'react';
import { TestioLogo } from './TestioLogo';
import { Logout } from './Logout';

export const PageHeader = ({ handleLogout }) => {
    return (
    	<div>
    		<TestioLogo/>
		   	<Logout handleLogout={handleLogout}/>
    	</div>
    )
}