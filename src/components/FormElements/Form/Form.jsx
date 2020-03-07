import React from 'react';
import { reduxForm } from 'redux-form';
import styled from 'styled-components';

const FormWrapper = styled('form')`
  display: flex;
  flex-direction: column;
`;

const Form = ({ children, handleSubmit }) => {
  return <FormWrapper onSubmit={handleSubmit}>{children}</FormWrapper>;
};

export default reduxForm()(Form);
