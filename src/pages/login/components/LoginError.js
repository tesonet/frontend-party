import React from 'react'

export const LoginError = ({ errorMessage }) => {
    return (
        <div>
    		{errorMessage ? (<div>{errorMessage}</div>):('')}
    	</div>
    )
}