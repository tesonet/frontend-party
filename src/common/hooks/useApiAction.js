import { useState } from 'react';

import { DEFAULT_ERROR } from '../config/errorMessages';

const useApiAction = (action, errorHandler, resolveErrorMessage = null) => {
  const [loaded, setLoaded] = useState(true);

  const sendAction = async (...args) => {
    try {
      setLoaded(false);
      const response = await action(...args);
      errorHandler.hideError();

      return response;
    } catch ({ response: { status } }) {
      const errorMessage = resolveErrorMessage === null
        ? DEFAULT_ERROR
        : resolveErrorMessage(status);

      errorHandler.showError(errorMessage);
    } finally {
      setLoaded(true);
    }

    return null;
  };

  return {
    loaded,
    sendAction,
  };
};

export default useApiAction;
