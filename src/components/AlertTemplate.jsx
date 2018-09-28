import React from 'react';

const BOOTSTRAP_CLASSES = {
  info: 'alert-info',
  success: 'alert-success',
  error: 'alert-danger'
};

export default ({style, options, message, close}) => (
  <div>
    <div
      className={`alert ${BOOTSTRAP_CLASSES[options.type]}`}
      role="alert"
      style={style}
      onClick={close}
    >
      {message}
    </div>
  </div>
);
