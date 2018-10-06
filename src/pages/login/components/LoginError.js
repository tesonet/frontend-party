import React from 'react'

export const LoginError = ({ errorMessage }) => {
    return (
        <div className="error-message">
    		{errorMessage ? (<div>{errorMessage}</div>):('')}
    	</div>
    )
}