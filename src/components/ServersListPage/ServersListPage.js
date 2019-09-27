import React from 'react';

import ServersList from '../ServersList/ServersList';
import LogoutButton from '../LogoutButton/LogoutButton';
import { ReactComponent as Logo } from '../../assets/images/logo-testio-dark.svg';
import './ServersListPage.scss';

const ServersListPage = props => {
    return (
        <>
            <div className="page-header">
                <Logo className="page-header__logo" />
                <LogoutButton {...props} className="page-header__button" />
            </div>
            <ServersList />
        </>
    );
};

export default ServersListPage;
