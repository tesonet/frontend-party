import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

const InputField = ({
  name,
  label,
  placeholder,
  type,
}) => (
  <div className="mb-5">
    {label && (
    <label
      htmlFor="lastName"
      className="block text-gray-100 text-sm font-bold mb-2 pl-2"
    >
      {label}
    </label>
    )}
    <Field
      name={name}
      component="input"
      type={type}
      placeholder={placeholder}
      className="border-none text-gray-100 rounded w-full bg-tesonet-gray-500 py-1.5 px-3 focus:outline-none"
    />
  </div>
);

InputField.defaultProps = {
  label: null,
  placeholder: null,

};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password']).isRequired,
};

export default InputField;
