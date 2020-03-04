import React from 'react';
import styled from 'styled-components';

const Icon = styled.svg`
  width: 14px;
  height: 18px;
  position: relative;
  top: -40px;
  left: 25px;
  @media (max-width: 400px) {
    left: 40px;
  }
`;

const PasswordIcon = () => (
  <Icon viewBox="0 0 14 18">
    <path
      d="m3 4c0-2.2 1.8001-3.9999 4.0002-3.9999 2.1998 0 4 1.8 4 3.9999v3h1.9999c0.5999 0 1 0.40003 1 1v9c0 0.6-0.4001 1-1 1h-12c-0.60003 0-0.99999-0.4-0.99999-1v-9c0-0.60001 0.39996-1 0.99999-1h2v-3zm2 3h4.0001v-3c0-1.1-0.90023-2-2-2-1.1001 0-2.0002 0.89995-2.0002 2v3zm3 4c0-0.5523-0.44767-1-0.99978-1-0.5525 0-1.0002 0.4477-1.0002 1v3c0 0.5523 0.44768 1 1.0002 1 0.55211 0 0.99978-0.4477 0.99978-1v-3z"
      clipRule="evenodd"
      fill="#ccc"
      fillRule="evenodd"
    />
  </Icon>
);

export default PasswordIcon;
