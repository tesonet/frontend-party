import React from 'react';
import Button from '../styled/Button';
import styled from 'styled-components';

const LoginButtonStyled = styled(Button)`
  &:hover {
    background-color: #86b300;
  }
`;

export default function LoginButton(props: React.ReactNode) {
  return (
    <LoginButtonStyled
      {...props}
      width="100%"
      backgroundColor="#9fd533"
      color="#fff"
      type="submit"
    >
      Log In
    </LoginButtonStyled>
  );
}
