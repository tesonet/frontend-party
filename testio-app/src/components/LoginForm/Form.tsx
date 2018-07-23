import SubmitButton from 'components/Buttons/LoginContainer';
import PasswordInput from 'components/Input/PasswordInputContainer';
import UsernameInput from 'components/Input/UsernameInputContainer';
import * as React from 'react';

const LoginForm: React.SFC<{}> = () => (
  <form>
    <UsernameInput />
    <PasswordInput />
    <SubmitButton />
  </form>
);

export default LoginForm;
