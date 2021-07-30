import React, { useState } from 'react';

import { Alert } from '../components';

const withErrorWrapper = (Component) => (props) => {
  const [isErrorShown, setIsErrorShown] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const showError = (message) => {
    setIsErrorShown(true);
    setErrorMessage(message);
  };

  const hideError = () => {
    setIsErrorShown(false);
    setErrorMessage(null);
  };

  const errorHandler = {
    showError,
    hideError,
  };

  return (
    <>
      {isErrorShown && errorMessage && (
        <div className="flex justify-center">
          <Alert hideAlert={hideError} message={errorMessage} />
        </div>
      )}
      <Component {...props} errorHandler={errorHandler} />
    </>
  );
};

export default withErrorWrapper;
