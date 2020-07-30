import * as React from 'react';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import CircularProgress from '@material-ui/core/CircularProgress';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | React.ReactNode;
  isLoading?: boolean;
}

const StyledButton = styled.button`
  width: 100%;
  background-color: ${themeGet('colors.primary')};
  color: ${themeGet('colors.white')};
  cursor: pointer;
  font-weight: ${themeGet('fontWeights.bold', 500)};
  border: none;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 6px;
  height: 58px;

  &:hover {
    background-color: ${themeGet('colors.primaryDark')};
  }

  &:disabled {
    cursor: default;
    background-color: ${themeGet('colors.primaryDark')};
  }
`;

export const Button = ({ children, isLoading = false, ...rest }: ButtonProps) => (
  <StyledButton {...rest} disabled={isLoading}>
    {isLoading ? <CircularProgress color="secondary" /> : children}
  </StyledButton>
);
