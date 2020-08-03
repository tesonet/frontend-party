import * as React from 'react';
import styled from 'styled-components';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { Button } from '@components/Button/Button';
import { Input } from '@components/Input/Input';
import { UserIcon } from '@components/Icons/UserIcon';
import { LockIcon } from '@components/Icons/LockIcon';
import * as Logo from '@assets/logo.png';
import { media } from '@theme/media';
import { actions } from '@redux/ducks/auth';
import { State } from '@redux/reducer';
import { RoutesMap } from '@redux/ducks/routes';
import { useUserStatus } from '@hooks/useUserStatus';

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 32rem;

  ${media.sm`
    width: 36rem;
  `}
`;

const Image = styled.img`
  padding-bottom: 6rem;
  align-self: center;
`;

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .required('Required')
    .matches(/^[a-zA-Z0-9_ ]*$/, 'No special characters allowed')
    .max(20, 'Username should not exceed 20 characters'),
  password: Yup.string()
    .required('Required')
    .min(8, 'Password should be at least 8 characters')
    .max(20, 'Password should not exceed 20 characters'),
});

export const LoginContainer = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state: State) => state.user);
  const isAuthorised = useUserStatus();

  const handleSubmit = (arg: any) => {
    dispatch(actions.login(arg));
  };

  if (isAuthorised) {
    return <Redirect to={RoutesMap.HOME_ROUTE} />;
  }

  return (
    <LoginWrapper data-testid="login-form">
      <Image src={Logo} alt="Testio" />
      <Formik
        onSubmit={handleSubmit}
        initialValues={{ username: '', password: '' }}
        validateOnBlur
        validationSchema={LoginSchema}
        validateOnChange={false}
      >
        {() => (
          <Form>
            <Input id="username" name="username" type="text" placeholder="Username" icon={<UserIcon />} />
            <Input id="password" name="password" type="password" placeholder="Password" icon={<LockIcon />} />
            <Button type="submit" isLoading={isLoading}>
              Log in
            </Button>
          </Form>
        )}
      </Formik>
    </LoginWrapper>
  );
};

export default LoginContainer;
