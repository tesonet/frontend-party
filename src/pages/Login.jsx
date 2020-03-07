import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Page } from 'containers';
import { Form, Field, Input, Button } from 'components/FormElements';
import { LoadingIndicator } from 'components/LoadingElements';
import { actions as authActions } from 'store/authorize';
import { isRequired } from 'utils/validations';

const Login = ({ history }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.auth.isLoading);
  const error = useSelector(state => state.auth.error);

  return (
    <Page center>
      <div>logo</div>
      <Form
        form='loginForm'
        initialValues={{ username: 'tesonet', password: 'partyanimal' }}
        onSubmit={values => {
          dispatch(authActions.logIn(values, history));
        }}
      >
        <Field
          disabled={isLoading}
          name='username'
          placeholder='username'
          component={Input.Text}
          validate={isRequired}
        />
        <Field
          disabled={isLoading}
          name='password'
          placeholder='password'
          component={Input.Text}
          validate={isRequired}
        />
        {error && error}
        <Button type='submit' disabled={isLoading}>
          Login
        </Button>
        {isLoading && <LoadingIndicator />}
      </Form>
    </Page>
  );
};

export default Login;
