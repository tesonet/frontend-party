import React from 'react';
import PropTypes from 'prop-types';
import style from './Error.scss';

const Error = ({ message }) => (
  message ? (<div className={style.error}>{message}</div>) : null
);

Error.defaultProps = {
  message: '',
};

Error.propTypes = {
  message: PropTypes.string,
};

export default Error;
