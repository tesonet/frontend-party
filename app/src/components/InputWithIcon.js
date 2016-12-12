import React, { PropTypes } from 'react';
import {
  FormControl,
  Glyphicon,
} from 'react-bootstrap';
import './InputWithIcon.scss';

const InputWithIcon = ({ icon, type, placeholder, input, custom }) => (
  <div className="input-with-icon">
    {icon && <Glyphicon glyph={icon} />}
    <FormControl
      type={type}
      placeholder={placeholder}
      {...input}
      {...custom}
    />
  </div>
);

InputWithIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired,
  custom: PropTypes.object,
};

export default InputWithIcon;
