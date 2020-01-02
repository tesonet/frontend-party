import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledInput,
  StyledContainer,
  StyledIcon,
  StyledMessage,
} from './styles';

const FormField = ({
  icon,
  name,
  type,
  placeholder,
}) => (
  <>
    <StyledContainer>
      <StyledIcon src={icon} />
      <StyledInput type={type} name={name} placeholder={placeholder} />
    </StyledContainer>
    <StyledMessage name={name} component="div" />
  </>
);

FormField.defaultProps = {
  placeholder: '',
};

FormField.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

export default FormField;
