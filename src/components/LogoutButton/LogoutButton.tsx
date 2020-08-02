import * as React from 'react';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { LogoutIcon } from '@components/Icons/LogoutIcon';

interface LogoutButtonProps {
  onClick: () => void;
  children: string;
}

const ButtonStyled = styled.button`
  border: none;
  color: ${themeGet('colors.dark')};
  font-size: ${themeGet('fontSizes.small')};
  cursor: pointer;
  height: 3rem;
  background-color: inherit;

  svg {
    margin-right: 1rem;
  }

  &:hover {
    color: ${themeGet('colors.primaryHover')};

    svg {
      path {
        fill: ${themeGet('colors.primaryHover')};
      }
    }
  }
`;

export const LogoutButton = ({ onClick, children }: LogoutButtonProps) => (
  <ButtonStyled onClick={onClick}>
    <LogoutIcon />
    {children}
  </ButtonStyled>
);
