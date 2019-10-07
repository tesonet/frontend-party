import * as LoginLogo from '@assets/testio-logo.png';
import { Button } from '@components/Button';
import { TextInput } from '@components/text/TextInput';
import { styled } from '@components/theme';
import { Form, Formik, FormikActions } from 'formik';
import * as React from 'react';
import { DispatchProp, connect } from 'react-redux';
import * as Yup from 'yup';

import { authActions } from './duck/actions';
import { Credentials } from './duck/model';

const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const LoginImage = styled.img`
  align-self: center;
  padding-bottom: 68px;
`;

const LoginButton = styled(Button)`
  height: 58px;
  width: 100%;
`;

const loginValidationSchema = Yup.object().shape({
  username: Yup.string()
    .required('Required')
    .matches(/^[a-zA-Z0-9_ ]*$/, 'No special characters allowed')
    .max(22, 'Should not be exceed 22 characters'),
  password: Yup.string()
    .required('Required')
    .min(8, 'Should be at 8 characters')
    .max(22, 'Should not be exceed 22 characters'),
});

type Props = DispatchProp;

const Component: React.FunctionComponent<Props> = ({ dispatch }) => {
  const login = (
    credentials: Credentials,
    actions: FormikActions<Credentials>,
  ) => {
    const callbackFn = () => actions.setSubmitting(false);
    dispatch(authActions.login(credentials, callbackFn));
  };

  return (
    <LoginFormContainer>
      <LoginImage src={LoginLogo} />
      <Formik
        onSubmit={login}
        initialValues={{ username: '', password: '' }}
        validationSchema={loginValidationSchema}
        validateOnBlur={true}
        validateOnChange={false}
        render={({ errors, touched, isSubmitting }) => (
          <Form>
            <TextInput
              name="username"
              type="text"
              placeholder="Username"
              iconName="user"
              error={touched.username && errors.username}
            />
            <TextInput
              name="password"
              type="password"
              placeholder="Password"
              iconName="lock"
              error={touched.password && errors.password}
            />
            <LoginButton type="submit" disabled={isSubmitting} styleType="cta">
              Log in
            </LoginButton>
          </Form>
        )}
      />
    </LoginFormContainer>
  );
};

export const Login = connect()(Component);
