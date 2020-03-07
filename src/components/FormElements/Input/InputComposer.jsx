import React from 'react';

const Input = InputComponent => ({ meta, ...rest }) => {
  return (
    <div>
      <InputComponent {...rest} />
      {meta.touched && meta.error && <div>{meta.error}</div>}
    </div>
  );
};

export default Input;
