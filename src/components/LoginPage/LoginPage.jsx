import React from 'react';

import { useLocalStorage } from '../../hooks';

import LoginForm from './LoginForm';
import useLogin from './hooks/useLogin';

const LoginPage = () => {
  const { loaded, sendAction } = useLogin();
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

export default LoginPage;
