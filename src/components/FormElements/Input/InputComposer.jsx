import React from 'react';

import { Box } from 'components/Core';

import { Error } from './atoms';

const Input = InputComponent => ({ meta, wrapperProps, ...rest }) => (
  <Box {...wrapperProps}>
    <InputComponent hasError={!!meta.error} {...rest} />
    {meta.touched && meta.error && <Error color='red'>{meta.error}</Error>}
  </Box>
);
export default Input;
