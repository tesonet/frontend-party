import React, { memo } from 'react';
import PropTypes from 'prop-types';

const LoginSubmitButton = ({ disabled }) => (
    <button
        type="submit"
        className="login-button"
        disabled={disabled}
    >
        <strong>Log In</strong>
    </button>
);

LoginSubmitButton.propTypes = {
    disabled: PropTypes.bool.isRequired,
};

export default memo(LoginSubmitButton);
