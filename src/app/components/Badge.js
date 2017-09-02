import React from 'react';
import styled from 'styled-components';


const Container = styled.span`
  font-family: 'Fredoka One', cursive;
  color: white;
  font-size: 80px;
  line-height: 80px;
  position: relative;
  padding-right: 22px;

  &:after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    bottom: 11px;
    right: 0;
    background: ${props => props.theme.color.accent1};
  }
`;


const Badge = () => (
  <Container>
    testio
  </Container>
);

export default Badge;
