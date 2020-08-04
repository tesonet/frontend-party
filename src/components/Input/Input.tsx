import * as React from 'react';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { useField } from 'formik';

import { ErrorMessage } from './ErrorMessage/ErrorMessage';

interface InputProps {
  id: string;
  name: string;
  placeholder: string;
  type: 'text' | 'password';
  icon?: React.ReactNode;
}

interface StyledInputProps extends InputProps {
  hasIcon: boolean;
  hasError: boolean;
}

const InputWrapper = styled.div`
  position: relative;

  svg {
    position: absolute;
    left: 1.8rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const StyledInput = styled.input<StyledInputProps>`
  color: ${themeGet('colors.text')};
  height: 5.8rem;
  width: 100%;
  border-radius: 6px;
  padding-left: ${({ hasIcon }) => (hasIcon ? '5.6rem' : '1.8rem')};
  border-width: ${({ hasError }) => (hasError ? '2px' : '0')};
  border-color: ${({ hasError }) => (hasError ? themeGet('colors.error') : 'none')};
  font-weight: ${themeGet('fontWeights.lighter')};
  padding-top: 5px;

  &::placeholder {
    color: ${themeGet('colors.lightText')};
  }
`;

export const Input = ({ icon, name, ...rest }: InputProps) => {
  const [field, meta] = useField({ name, ...rest });

  const { error, touched } = meta;

  return (
    <>
      <InputWrapper>
        <StyledInput hasIcon={!!icon} hasError={!!error && touched} {...field} {...rest} />
        {icon && icon}
      </InputWrapper>
      <ErrorMessage>{!!error && touched && error}</ErrorMessage>
    </>
  );
};
