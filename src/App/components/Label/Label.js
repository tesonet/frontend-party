import React from 'react';
import styled from 'styled-components';

const Label = ({ size }) => {
  return (
    <Container size={size}>
      testio
      <LabelDot size={size} />
    </Container>
  )
}

const Container = styled.div`
  font-size: ${props => props.size === 'large' ? '50px' : '30px'};
  display: flex;
  justify-content: center;
  font-weight: 900;
  text-align: center;
  align-items: baseline;
  margin-bottom: ${props => props.size === 'large' ? '40px' : '0'};
  color: ${props => props.size === 'large' ? 'white' : 'rgb(41, 44, 74)'};
`

const LabelDot = styled.div`
  background-color: rgb(149, 207, 45);
  margin-left: 2px;
  border-radius: 10px;
  height: ${props => props.size === 'large' ? '12px' : '7px'};
  width: ${props => props.size === 'large' ? '12px' : '7px'};
`;

export default Label;
