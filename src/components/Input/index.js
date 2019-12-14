import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import './style.scss';

function Input({ input, meta: { touched, error }, className, placeholder, icon }) {
  return (
    <>
      <input
        style={icon && { backgroundImage: `url(${icon})` }}
        placeholder={placeholder}
        className={cx('input', className, icon && 'input__icon')}
        {...input}
      />
      {touched && error && <p className="input__error">{error}</p>}
    </>
  );
}

Input.propTypes = {
  input: PropTypes.shape({}).isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }).isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.string,
};

export default Input;
