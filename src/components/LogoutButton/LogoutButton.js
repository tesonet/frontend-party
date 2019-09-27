import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { logoutUser as logoutUserAction } from '../../actions/login';
import storage from '../../utils/localStorage';
import { AUTH_TOKEN_KEY } from '../../constants/token';
import { ReactComponent as Icon } from '../../assets/images/logout.svg';
import './LogoutButton.scss';

const LogoutButton = ({ history, className, logoutUser }) => {
    const logout = () => {
        logoutUser();
        storage.set(AUTH_TOKEN_KEY, '');
        history.push('/login');
    };

    return (
        <button type="button" className={`logout-button ${className}`} onClick={logout}>
            <Icon className="logout-button__icon" />
            Logout
        </button>
    );
};

LogoutButton.defaultProps = {
    className: ''
};

LogoutButton.propTypes = {
    className: PropTypes.string,
    logoutUser: PropTypes.func.isRequired,
    history: PropTypes.objectOf(PropTypes.any).isRequired
};

const mapDispatchToProps = {
    logoutUser: () => logoutUserAction()
};

export default connect(
    null,
    mapDispatchToProps
)(LogoutButton);
