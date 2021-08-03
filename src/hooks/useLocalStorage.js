import { useState } from 'react';

const useLocalStorage = (key) => {
  const [value, setValue] = useState(window.localStorage.getItem(key));

  const updateKey = (newValue) => {
    window.localStorage.setItem(key, newValue);
    setValue(newValue);
  };

  const removeValue = () => {
    window.localStorage.removeItem(key);
    setValue(null);
  };

  return {
    value,
    updateKey,
    removeValue,
  };
};

export default useLocalStorage;
