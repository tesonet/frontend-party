import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

import './IconButton.scss';

const IconButton = ({ icon, buttonText, onClick }) => (
  <div className="icon-button" onClick={onClick}>
    <Icon icon={icon} />
    <div>
      {buttonText}
    </div>
  </div>
);

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default IconButton;
