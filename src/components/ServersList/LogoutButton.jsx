import React, { memo } from 'react';
import PropTypes from 'prop-types';
import logoutIcon from '../../assets/logout-icon.svg';

const LogoutButton = ({ action }) => (
    <button
        type="button"
        onClick={action}
        className="logout-button"
    >
        <img src={logoutIcon} alt="" className="logout-button-icon" />
        Logout
    </button>
);

LogoutButton.propTypes = {
    action: PropTypes.func.isRequired,
};

export default memo(LogoutButton);
