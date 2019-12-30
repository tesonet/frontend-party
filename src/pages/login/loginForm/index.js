import React from 'react';
import { withRouter } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { getUserToken } from '../../../server/api/tesonetApi';
import iconUsername from '../../../assets/icon-username.svg';
import iconPassword from '../../../assets/icon-password.svg';
import { StyledButton } from './styles';
import FormField from './formField';

const LoginForm = ({ history }) => {
  const handleSubmit = async (values) => {
    const response = await getUserToken(values);

    if (response && response.ok) {
      const data = await response.json();
      localStorage.setItem('token', data.token);
      history.push('/servers');
    }
  };
  return (
    <div>
      <Formik
        initialValues={{ username: '', password: '' }}
        validate={(values) => {
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
            <FormField
              name="username"
              type="username"
              icon={iconUsername}
              placeholder="Username"
            />
            <FormField
              name="password"
              type="password"
              icon={iconPassword}
              placeholder="Password"
            />
            <StyledButton type="submit" disabled={isSubmitting}>
              Log In
            </StyledButton>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default withRouter(LoginForm);
