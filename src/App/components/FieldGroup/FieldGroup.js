import React from 'react';
import styled from 'styled-components';
import { FormGroup, FormControl } from 'react-bootstrap';

const FieldGroup = ({ ...props }) => {
  return (
    <FormGroup>
      <InputField {...props} />
    </FormGroup>
  )
}

const InputField = styled(FormControl)`
  height: 45px;

  &:focus {
    color: #999;
  }
`;

export default FieldGroup;
