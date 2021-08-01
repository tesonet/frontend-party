import React, { useEffect } from 'react';
import {
  withErrorWrapper,
  Loader,
  withErrorWrapperPropTypes,
} from '@Common';

import { useLocalStorage, useRedirect } from '../../hooks';
import useLogin from './hooks/useLogin';
import LoginForm from './LoginForm';
import LoginFormContainer from './LoginFormContainer';

const LoginPage = ({ errorHandler }) => {
  const { loaded, sendAction } = useLogin(errorHandler);
  const { token, updateToken } = useLocalStorage();
  const { toMain } = useRedirect();

  useEffect(() => {
    if (token) {
      toMain();
    }
  }, [token]);

  const onSubmit = async ({ username, password }) => {
    const response = await sendAction(username, password);
    if (response) {
      updateToken(response);
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
