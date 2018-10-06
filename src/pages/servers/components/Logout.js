import React from 'react'

export const Logout = ({ handleLogout }) => {
    return (
        <div className="logout-button" onClick={handleLogout}>Logout</div>
    )
}