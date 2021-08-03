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
import { TOKEN } from '../../config/constants';

const LoginPage = ({ errorHandler }) => {
  const { loaded, sendAction } = useLogin(errorHandler);
  const { updateKey } = useLocalStorage(TOKEN);
  const { toMain } = useRedirect();
  const { updateUserAuthentication } = useUserAuthentication();

  const onSubmit = async ({ username, password }) => {
    const response = await sendAction(username, password);
    if (response) {
      updateKey(response);
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
