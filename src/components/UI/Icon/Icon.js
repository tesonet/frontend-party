import React from 'react';
import PropTypes from 'prop-types';
import UserIcon from '../../../assets/user.svg';
import LockIcon from '../../../assets/lock.svg';
import LogoutIcon from '../../../assets/logout.svg';

const Icon = ({ icon }) => {
  switch (icon) {
    case 'user':
      return <UserIcon />;
    case 'lock':
      return <LockIcon />;
    case 'logout':
      return <LogoutIcon />;
    default:
      return null;
  }
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default Icon;
