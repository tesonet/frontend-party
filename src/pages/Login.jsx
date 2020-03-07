import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Form, Field, Input } from 'components/FormElements';
import { LoadingIndicator } from 'components/LoadingElements';
import { actions as authActions } from 'store/authorize';
import { isRequired } from 'utils/validations';

const Login = ({ history }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.auth.isLoading);
  const error = useSelector(state => state.auth.error);

  return (
    <React.Fragment>
      {isLoading && <LoadingIndicator />}
      <Form
        form='loginForm'
        onSubmit={values => {
          dispatch(authActions.logIn(values, history));
        }}
      >
        <Field
          disabled={isLoading}
          name='userName'
          placeholder='username'
          component={Input.Text}
          validate={isRequired}
        />
        <Field
          disabled={isLoading}
          name='userPassword'
          placeholder='password'
          component={Input.Text}
          validate={isRequired}
        />
        {error && error}
        <button type='submit' disabled={isLoading}>
          Login
        </button>
      </Form>
    </React.Fragment>
  );
};

export default Login;
