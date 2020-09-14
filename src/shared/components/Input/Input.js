import React from 'react';
import PropTypes from 'prop-types';
import ICONS from '@/shared/constants/icons';
import { StyledInput, StyledInputWrapper, StyledInputIcon } from './Input.styles';

const Input = ({ icon, ...rest }) => (
  <StyledInputWrapper>
    {ICONS[icon] && <StyledInputIcon src={ICONS[icon]} alt="logo" />}
    <StyledInput
      hasIcon={ICONS[icon]}
      {...rest}
    />
  </StyledInputWrapper>

);

Input.defaultProps = {
  icon: null,
};

Input.propTypes = {
  icon: PropTypes.string,
};

export default Input;
