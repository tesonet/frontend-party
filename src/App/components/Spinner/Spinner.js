import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const Spinner = ({ size }) =>  (
  <SpinnerContainer>
    <SpinnerComponent size={size} />
  </SpinnerContainer>
);

const SpinnerContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const SpinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const SpinnerComponent = styled.div`
  display: inline-block;

  &::after {
    content: " ";
    display: block;
    width: ${props => props.size === 'large' ? '46px' : '30px'};
    height: ${props => props.size === 'large' ? '46px' : '30px'};
    margin: 1px;
    border-radius: 50%;
    border: 5px solid #cef;
    border-color: #cef transparent #cef transparent;
    animation: lds-dual-ring;
  }

  animation: ${SpinAnimation} 1.2s linear infinite;
`;

Spinner.propTypes = {
  size: PropTypes.string.isRequired,
}

export default Spinner;