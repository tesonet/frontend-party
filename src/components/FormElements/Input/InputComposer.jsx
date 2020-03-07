import React from 'react';
import styled from 'styled-components';
import { space, layout } from 'styled-system';

import { Error } from './atoms';

const InputWrapper = styled('div')`
  width: 100%;
  ${space}
  ${layout}
`;

const Input = InputComponent => ({ meta, wrapperProps, ...rest }) => (
  <InputWrapper {...wrapperProps}>
    <InputComponent hasError={!!meta.error} {...rest} />
    {meta.touched && meta.error && <Error color='red'>{meta.error}</Error>}
  </InputWrapper>
);
export default Input;
