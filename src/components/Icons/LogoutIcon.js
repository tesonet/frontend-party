import React from 'react';
import styled from 'styled-components';

const Icon = styled.svg`
  width: 16px;
  height: 16px;
`;

const LogoutIcon = () => (
  <Icon viewBox="0 0 16 16">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.99998 16H15.0001C15.6001 16 16.0001 15.5999 16.0001 15V0.999986C16.0001 0.399985 15.6001 -4.1008e-05 15.0001 -4.1008e-05H5.99998C5.40015 -4.1008e-05 5.00018 0.399985 5.00018 0.999986V4.00003H7.00016V2.00003H14.0001V14H7.00016V12H5.00018V15C5.00018 15.5999 5.40015 16 5.99998 16ZM6.49691e-05 7.99998L4 4.00003V7.00002H9.99994V9.00001H4V12L6.49691e-05 7.99998Z"
      fill="#2F3254"
    />
  </Icon>
);

export default LogoutIcon;
