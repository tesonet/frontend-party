import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import darkTestioLogo from '../../assets/logo-testio-dark.svg';
import LogoutButton from './LogoutButton';
import authActions from '../../actions/authActions';

const ServersHeader = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const logout = () => dispatch(authActions.logout(history));

    return (
        <div className="servers-header">
            <img src={darkTestioLogo} alt="" className="servers-logo" />
            <LogoutButton action={logout} />
        </div>
    );
};

export default memo(ServersHeader);
