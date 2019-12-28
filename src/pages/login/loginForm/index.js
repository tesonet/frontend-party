import React from 'react';
import { Formik, Form } from 'formik';
import { getServersList, getUserToken } from "../../../server/api/tesonetApi";
import { StyledButton, StyledInput, StyledMessage }from './styles';

const handleSubmit = async (values, { setSubmitting }) => {
  const response = await getUserToken(values);

  if(response && response.ok) {
    const data = await response.json();
    localStorage.setItem('token', data.token);
    const list = await getServersList(data.token);
    console.log(await list.json());
  }
  setSubmitting(false);
};

const LoginForm = () => (
  <div>
    <Formik
      initialValues={{ username: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.username) {
          errors.username = 'Required';
        }
        return errors;
      }}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <StyledInput type="username" name="username" />
          <StyledMessage name="username" component="div" />
          <StyledInput type="password" name="password" />
          <StyledMessage name="password" component="div" />
          <StyledButton type="submit" disabled={isSubmitting}>
            Log In
          </StyledButton>
        </Form>
      )}
    </Formik>
  </div>
);

export default LoginForm;
