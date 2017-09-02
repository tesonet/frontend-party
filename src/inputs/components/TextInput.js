import React from 'react';
import styled from 'styled-components';


const Input = ({hasError, ...props}) => ( // eslint-disable-line
  <input {...props} />
);


const TextInput = styled(Input)`
  color: ${props => props.hasError ? 'red' : 'black'};
  border: 1px solid ${props => props.hasError ? 'red' : 'black'};

  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px cyan;
  }
`;

export default TextInput;
