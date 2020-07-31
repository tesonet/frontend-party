import * as React from 'react';
import styled from 'styled-components';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { Button } from '@components/Button/Button';
import { Input } from '@components/Input/Input';
import { UserIcon } from '@components/Icons/UserIcon';
import { LockIcon } from '@components/Icons/LockIcon';

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 36rem;
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
  const handleSubmit = (arg: any) => {
    console.log('submit', arg);
  };

  return (
    <LoginWrapper>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{ username: '', password: '' }}
        validationSchema={LoginSchema}
        validateOnBlur
        validateOnChange={false}
        render={({ isSubmitting }) => (
          <Form>
            <Input id="username" name="username" type="text" placeholder="Username" icon={<UserIcon />} />
            <Input id="password" name="password" type="password" placeholder="Password" icon={<LockIcon />} />
            <Button type="submit" isLoading={isSubmitting}>
              Log in
            </Button>
          </Form>
        )}
      />
    </LoginWrapper>
  );
};
