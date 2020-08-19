import React from 'react';
import LoginError from './LoginError';

const LoginInput = ({input, placeholder, inputType, className, meta}) => {
  return(
    <div className="form__row">
      <input {...input} type={inputType} placeholder={placeholder} className={className} />
      <LoginError {...meta} />
    </div>
  );
};

export default LoginInput;
