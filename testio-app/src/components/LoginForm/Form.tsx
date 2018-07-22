import * as React from 'react';
import SubmitButton from '../Buttons/LoginContainer';
import PasswordInput from '../Input/PasswordInputContainer';
import UsernameInput from '../Input/UsernameInputContainer';

const LoginForm: React.SFC<{}> = () => (
  <form>
    <UsernameInput />
    <PasswordInput />
    <SubmitButton />
  </form>
);

export default LoginForm;
