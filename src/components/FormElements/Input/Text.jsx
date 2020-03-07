import React from 'react';

import { InputWrapper, InputIconWrapper, InputStyled } from './atoms';

const defaultProps = {
  variant: 'default'
};

const Text = ({ input, icon: Icon, ...rest }) => (
  <InputWrapper>
    {Icon && (
      <InputIconWrapper>
        <Icon color='grey' />
      </InputIconWrapper>
    )}
    <InputStyled hasIcon={!!Icon} {...input} {...rest} />
  </InputWrapper>
);

Text.defaultProps = defaultProps;

export default Text;
