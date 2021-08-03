import { useState } from 'react';

const useErrorWrapperAlertState = () => {
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

  return {
    isErrorShown,
    errorMessage,
    showError,
    hideError,
  };
};

export default useErrorWrapperAlertState;
