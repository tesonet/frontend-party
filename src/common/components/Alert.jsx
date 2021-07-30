import React from 'react';
import { ImCancelCircle } from 'react-icons/all';
import PropTypes from 'prop-types';

const Alert = ({ hideAlert, message }) => (
  <div className="flex bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
    <span>{message}</span>
    <div
      className="pl-3 cursor-pointer"
      onClick={hideAlert}
    >
      <ImCancelCircle size="20" />
    </div>
  </div>
);

Alert.propTypes = {
  hideAlert: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default Alert;
