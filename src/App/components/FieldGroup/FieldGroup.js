import React from 'react';
import styled from 'styled-components';
import { FormGroup, FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';

const FieldGroup = (props) => {
  return (
    <FormGroup>
      <InputField {...props} />
    </FormGroup>
  )
}

FieldGroup.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

const InputField = styled(FormControl)`
  height: 45px;

  &:focus {
    color: #999;
  }
`;

export default FieldGroup;
