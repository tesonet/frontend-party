import React from 'react'

const Text = ({ input, ...rest }) => {
  return <input {...input} {...rest} />;
};

export default Text