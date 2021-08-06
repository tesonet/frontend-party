import React from 'react';
import { ImCancelCircle } from 'react-icons/im';
import PropTypes from 'prop-types';

const Alert = ({ hideAlert, message }) => (
  <div className="flex justify-center">
    <div className="flex flex-grow justify-between bg-red-100 border border-red-400 text-red-700 mx-4 px-4 py-3 rounded w-full md:w-1/2">
      <span>{message}</span>
      {hideAlert && (
      <div className="pl-3 cursor-pointer">
        <ImCancelCircle
          size="20"
          onClick={hideAlert}
        />
      </div>
      )}
    </div>
  </div>
);

Alert.defaultProps = {
  hideAlert: null,
};

Alert.propTypes = {
  hideAlert: PropTypes.func,
  message: PropTypes.string.isRequired,
};

export default Alert;
