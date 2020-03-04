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

const UserIcon = () => (
  <Icon viewBox="0 0 14 18">
    <path
      d="m3 4c0-2.206 1.7939-4 4.0002-4 2.2058 0 4 1.7939 4 4v1c0 2.2059-1.7941 4-4 4-2.2062 0-4.0002-1.794-4.0002-4v-1zm4.0002 7c1.5547 0 2.9689-0.6 4.0359-1.574 1.761 0.57397 2.9641 1.885 2.9641 3.574v3h-14v-3c0-1.689 1.2029-3 2.964-3.574 1.067 0.97398 2.481 1.574 4.0361 1.574z"
      clipRule="evenodd"
      fill="#ccc"
      fillRule="evenodd"
    />
  </Icon>
);

export default UserIcon;
