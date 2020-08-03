import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../UI/Logo';
import IconButton from '../UI/IconButton';
import './Header.scss';

export const Header = ({ onButtonClick }) => (
  <header className="header">
    <Logo type="servers" />
    <IconButton buttonText="Logout" icon="logout" onClick={onButtonClick} />
  </header>
);

Header.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default Header;
