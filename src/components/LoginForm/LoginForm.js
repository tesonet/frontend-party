// @flow

import * as React from 'react';
import styled from 'styled-components';

import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { UserIcon, PasswordIcon } from '../Icons/Icons';

const Form = styled.form`
  margin-top: 50px;
  display: grid;
  justify-items: center;
`;

export const LoginForm = () => (
  <Form>
    <Input inputType="text" inputPlaceholder="Username" icon={<UserIcon />} />
    <Input inputType="password" inputPlaceholder="Password" icon={<PasswordIcon />} />
    <Button text="Log In" />
  </Form>
);
