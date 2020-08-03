import React from 'react';
import PropTypes from 'prop-types';
import loginLogo from '../../../assets/logo-login.png';
import serversLogo from '../../../assets/logo-servers.png';

const Logo = ({ type, style }) => {
  const getLogoType = () => {
    switch (type) {
      case 'login':
        return loginLogo;
      case 'servers':
        return serversLogo;
      default:
        break;
    }
  };

  return (
    <div style={style}>
      <img alt="" src={getLogoType()} />
    </div>
  );
};

Logo.propTypes = {
  type: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default Logo;
