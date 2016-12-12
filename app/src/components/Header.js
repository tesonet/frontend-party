import React, { PropTypes } from 'react';
import FlatButton from './FlatButton';
import './Header.scss';

const Header = ({ onButtonClick }) => (
  <div className="header">
    <img src={require('../../public/images/logo.png')} alt="testio" />
    <FlatButton
      icon="log-out"
      onClick={onButtonClick}
    >
       Logout
     </FlatButton>
  </div>
);

Header.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default Header;
