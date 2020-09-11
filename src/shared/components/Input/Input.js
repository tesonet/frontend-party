import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput, StyledInputWrapper, StyledInputIcon } from './Input.styles';
import ICONS from '@/shared/constants/icons';

const Input = ({ placeholder, type, name, icon }) => (
  <StyledInputWrapper>
    {ICONS[icon] && <StyledInputIcon src={ICONS[icon]} alt='logo' />}
    <StyledInput
      name={name}
      type={type}
      placeholder={placeholder}
      hasIcon={ICONS[icon]}
    />
  </StyledInputWrapper>

)

Input.defaultProps = {
  placeholder: '',
  icon: null
};

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

export default Input;