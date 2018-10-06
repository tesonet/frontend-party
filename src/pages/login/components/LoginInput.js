import React from 'react'

export const LoginInput = ({ handleChange, value, name, type }) => {
    return (
        <input onChange={handleChange} value={value} name={name} type={type}/>
    )
}