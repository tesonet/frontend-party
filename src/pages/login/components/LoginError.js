import React from 'react'

export const LoginError = ({ errorMessage }) => (
    <div className="error-message">
    		{errorMessage ? (<div>{errorMessage}</div>):('')}
    	</div>
)