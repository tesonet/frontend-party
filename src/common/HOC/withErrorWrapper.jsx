import React from 'react';

import { Alert } from '../components';
import { useErrorWrapperAlertState } from '../hooks';

const withErrorWrapper = (Component) => (props) => {
  const {
    isErrorShown,
    errorMessage,
    showError,
    hideError,
  } = useErrorWrapperAlertState();

  const errorHandler = {
    showError,
    hideError,
  };

  return (
    <>
      {isErrorShown && errorMessage && (
        <Alert hideAlert={hideError} message={errorMessage} />
      )}
      <Component {...props} errorHandler={errorHandler} />
    </>
  );
};

export default withErrorWrapper;
