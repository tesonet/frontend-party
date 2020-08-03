import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import './Input.scss';

const Input = ({
  icon, type, placeholder, value, onChange, required,
}) => (
  <div className="input-container">
    <Icon icon={icon} />
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      data-test="input-field"
    />
  </div>
);

Input.propTypes = {
  icon: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

Input.defaultProps = {
  placeholder: '',
  required: false,
};

export default Input;
