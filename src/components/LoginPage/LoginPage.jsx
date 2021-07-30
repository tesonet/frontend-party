import React from 'react';
import PropTypes from 'prop-types';

import { withErrorWrapper } from '@Common/HOC';

import { useLocalStorage, useRedirect } from '../../hooks';
import useLogin from './hooks/useLogin';
import LoginForm from './LoginForm';
import LoginFormContainer from './LoginFormContainer';

const LoginPage = ({ errorHandler }) => {
  const { loaded, sendAction } = useLogin(errorHandler);
  const { updateToken } = useLocalStorage();
  const { toMain } = useRedirect();

  const onSubmit = async ({ username, password }) => {
    const token = await sendAction(username, password);
    if (token) {
      updateToken(token);
      toMain();
    }
  };

  return (
    <LoginFormContainer>
      <LoginForm onSubmit={onSubmit} />
    </LoginFormContainer>
  );
};

LoginPage.propTypes = {
  errorHandler: PropTypes.shape({
    showError: PropTypes.func,
    hideError: PropTypes.func,
  }).isRequired,
};

export default withErrorWrapper(LoginPage);
