import React from 'react';

const LoginError = ({submitFailed, error}) => {
  return (submitFailed && error) ? <div className="form__error">{error}</div> : '';
};

export default LoginError;
