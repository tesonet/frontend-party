import { TextField } from '@material-ui/core';
import { useField } from 'formik';
import React from 'react';

const FormTextField = (props) => {
  const [field, meta] = useField(props);
  return (
    <TextField {...field} {...props} error={!!meta.touched && !!meta.error} />
  );
};

export default FormTextField;
