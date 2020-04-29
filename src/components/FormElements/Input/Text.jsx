import React from 'react';

import { Box } from 'components/Core';

import { InputIconWrapper, InputStyled } from './atoms';

const defaultProps = {
  variant: 'default'
};

const Text = ({ input, icon: Icon, ...rest }) => (
  <Box position='relative'>
    {Icon && (
      <InputIconWrapper>
        <Icon color='grey' />
      </InputIconWrapper>
    )}
    <InputStyled hasIcon={!!Icon} {...input} {...rest} />
  </Box>
);

Text.defaultProps = defaultProps;

export default Text;
