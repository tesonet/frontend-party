import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { logoutUser as logoutUserAction } from '../../actions/login';
import storage from '../../utils/localStorage';
import { AUTH_TOKEN_KEY } from '../../constants/token';
import { ReactComponent as Icon } from '../../assets/images/logout.svg';
import './LogoutButton.scss';

const LogoutButton = ({ className, history, logoutUser }) => {
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
    history: PropTypes.objectOf(PropTypes.any).isRequired,
    logoutUser: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUserAction())
});

export default connect(
    null,
    mapDispatchToProps
)(withRouter(LogoutButton));
