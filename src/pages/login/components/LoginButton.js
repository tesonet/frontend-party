import React from 'react'

export const LoginButton = ({ handleClick, label }) => {
    return (
        <button onClick={handleClick}>{label}</button>
    )
}