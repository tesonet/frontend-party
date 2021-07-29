import { useState } from 'react';

import { DEFAULT_ERROR } from '../config/errorMessages';

const useApiAction = (action, errorMessage = DEFAULT_ERROR) => {
  const [loaded, setLoaded] = useState(true);

  const sendAction = async (...args) => {
    try {
      setLoaded(false);

      return await action(...args);
    } catch (e) {
      // TODO: realize error wrapper
      console.error(errorMessage);
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
