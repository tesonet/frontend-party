import React from 'react';
import styled from 'styled-components';


const Container = styled.span`
  font-family: 'Fredoka One', cursive;
  color: ${props => props.small ? props.theme.color.accent2 : 'white'};
  font-size: ${props => props.small ? 36 : 80}px;
  line-height: ${props => props.small ? 36 : 80}px;
  position: relative;
  padding-right: ${props => props.small ? 9 : 22}px;

  &:after {
    content: '';
    position: absolute;
    width: ${props => props.small ? 8 : 20}px;
    height: ${props => props.small ? 8 : 20}px;
    border-radius: 100%;
    bottom: ${props => props.small ? 8 : 11}px;
    right: 0;
    background: ${props => props.theme.color.accent1};
  }
`;


const Badge = props => (
  <Container {...props}>
    testio
  </Container>
);

export default Badge;
