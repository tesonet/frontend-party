import SubmitButton from 'components/Buttons/LoginContainer';
import ErrorMessage from 'components/ErrorMessages/LoginErrorContainer';
import PasswordInput from 'components/Input/PasswordInputContainer';
import UsernameInput from 'components/Input/UsernameInputContainer';
import * as React from 'react';

const LoginForm: React.SFC<{}> = () => {
  const onSubmitHandler = (event: any) => {
    event.preventDefault();
    return false;
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <UsernameInput />
      <PasswordInput />
      <ErrorMessage />
      <SubmitButton />
    </form>
  );
};

export default LoginForm;
