import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function ErrorMessage({ message }) {
  return (
    <div className="error">
      <p className="error__message">{message}</p>
    </div>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
