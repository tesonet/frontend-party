import React from 'react';
import { ImCancelCircle } from 'react-icons/im';
import PropTypes from 'prop-types';

const Alert = ({ hideAlert, message }) => (
  <div className="flex justify-between bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded w-full md:w-1/2">
    <span>{message}</span>
    <div className="pl-3 cursor-pointer">
      <ImCancelCircle
        size="20"
        onClick={hideAlert}
      />
    </div>
  </div>
);

Alert.propTypes = {
  hideAlert: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default Alert;
