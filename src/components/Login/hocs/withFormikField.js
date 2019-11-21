import { Field } from 'formik';
import React from 'react';

const withFormikField = (Component) => (props) => (
  <Field name={props.name}>
    {({ field, form: { touched, errors } }) => (
      <Component
        error={!!touched[field.name] && !!errors[field.name]}
        {...field}
        {...props}
      />
    )}
  </Field>
);

export default withFormikField;
