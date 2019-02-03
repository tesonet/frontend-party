import React from 'react';
import Icon from '../utils/elements/Icon';
import logo from '../../assets/img/testio_color.png';

const ServersLayout = ({ children, onLogoutClick }) => (
    <>
        <nav className="navigation">
            <div className="navigation__logo--container">
                <img src={logo} className="navigation__logo" alt="Logo" />
            </div>

            <ul className="navigation__links">
                <li>
                    <button
                        onClick={onLogoutClick}
                        className="navigation__link"
                    >
                        <Icon name="logout" className="navigation__icon" />
                        Logout
                    </button>
                </li>
            </ul>
        </nav>
        <main>{children}</main>
    </>
);

export default ServersLayout;
