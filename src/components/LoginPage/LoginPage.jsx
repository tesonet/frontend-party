import React from 'react';
import {
  withErrorWrapper,
  Loader,
  withErrorWrapperPropTypes,
} from '@Common';

import { useLocalStorage, useRedirect, useUserAuthentication } from '../../hooks';
import useLogin from './hooks/useLogin';
import LoginForm from './LoginForm';
import LoginFormContainer from './LoginFormContainer';

const LoginPage = ({ errorHandler }) => {
  const { loaded, sendAction } = useLogin(errorHandler);
  const { updateToken } = useLocalStorage();
  const { toMain } = useRedirect();
  const { updateUserAuthentication } = useUserAuthentication();

  const onSubmit = async ({ username, password }) => {
    const response = await sendAction(username, password);
    if (response) {
      updateToken(response);
      updateUserAuthentication(true);
      toMain();
    }
  };

  return (
    <LoginFormContainer>
      <Loader loaded={loaded}>
        <LoginForm onSubmit={onSubmit} />
      </Loader>
    </LoginFormContainer>
  );
};

LoginPage.propTypes = {
  ...withErrorWrapperPropTypes,
};

export default withErrorWrapper(LoginPage);
