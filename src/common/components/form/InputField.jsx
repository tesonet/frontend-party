import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import renderField from './renderField';

const InputField = ({
  name,
  label,
  placeholder,
  type,
}) => (
  <div className="mb-5">
    <Field
      name={name}
      component={renderField}
      type={type}
      label={label}
      placeholder={placeholder}
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
  type: PropTypes.string.isRequired,
};

export default InputField;
