import { useState, useEffect } from 'react';

import { TOKEN } from '../config/constants';

const useLocalStorage = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storageToken = window.localStorage.getItem(TOKEN);

    if (storageToken) {
      setToken(storageToken);
    }
  }, []);

  const updateToken = (newToken) => {
    window.localStorage.setItem(TOKEN, newToken);
    setToken(newToken);
  };

  const removeToken = () => {
    window.localStorage.removeItem(TOKEN);
    setToken(null);
  };

  return {
    token,
    updateToken,
    removeToken,
  };
};

export default useLocalStorage;
