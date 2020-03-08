import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Page } from 'containers';
import { Image } from 'components/PageElements';
import { Form, Field, Input, Button } from 'components/FormElements';
import { BodyText } from 'components/Typography';
import { actions as authActions } from 'store/authorize';
import { isRequired } from 'utils/validations';
import * as Icons from 'components/Icons';
import logoLight from 'assets/logoLight.png';
import background from 'assets/background.jpg';

const Login = ({ history }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.auth.isLoading);
  const error = useSelector(state => state.auth.error);

  return (
    <Page
      center
      isLoading={isLoading}
      background={`linear-gradient(rgba(11,15,39, 0.8), rgba(11,15,39, 0.8)), url('${background}') no-repeat top center/cover`}
    >
      <Image width={246} src={logoLight} mb={70} />
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
          placeholder='Username'
          component={Input.Text}
          validate={isRequired}
          icon={Icons.User}
          wrapperProps={{ pb: 20 }}
        />
        <Field
          disabled={isLoading}
          name='password'
          placeholder='Password'
          component={Input.Text}
          validate={isRequired}
          icon={Icons.Password}
          wrapperProps={{ pb: 20 }}
        />
        <Button variant='primary' type='submit' disabled={isLoading}>
          <BodyText fontWeight='bold'>Log in</BodyText>
        </Button>
        {error && (
          <BodyText mt={20} color='red' textAlign='center'>
            {error}
          </BodyText>
        )}
      </Form>
    </Page>
  );
};

export default Login;
