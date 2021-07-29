import React from 'react';
import PropTypes from 'prop-types';

import { withErrorWrapper } from '@Common/HOC';

import { useLocalStorage } from '../../hooks';
import LoginForm from './LoginForm';
import useLogin from './hooks/useLogin';

const LoginPage = ({ showError }) => {
  const { loaded, sendAction } = useLogin(showError);
  const { updateToken } = useLocalStorage();

  const onSubmit = async ({ username, password }) => {
    const result = await sendAction(username, password);
    updateToken(result);
  };

  if (!loaded) {
    return 'Loading';
  }

  return (
    <div className="min-h-screen bg-tesonet-gray-900 flex justify-center">
      <div className="w-full max-w-lg">
        <LoginForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

LoginPage.propTypes = {
  showError: PropTypes.func.isRequired,
};

export default withErrorWrapper(LoginPage);
