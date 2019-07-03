import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/testio-logo-dark.png';
import ActionButton from './ActionButton';
import iconLogout from '../../assets/logout.svg';
import auth from '../../store/actions/auth';
import './Header.scss';

const Header = () => {
  return (
    <header className="Header">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <ActionButton action={auth.logOut} options={{ text: 'Logout', icon: iconLogout }} />
    </header>
  );
}

export default Header;