import React from 'react';
import { reduxForm } from 'redux-form';

const Form = ({ children, handleSubmit }) => {
  return <form onSubmit={handleSubmit}>{children}</form>;
};

export default reduxForm()(Form);
