import React from 'react';

import { withChildrenPropTypes, withDefaultChildrenPropTypes } from '@Common';

const LoginFormContainer = ({ children }) => (
  <div className="flex justify-center">
    <div className="w-full max-w-lg">
      {children}
    </div>
  </div>
);

LoginFormContainer.defaultProps = {
  ...withDefaultChildrenPropTypes,
};

LoginFormContainer.propTypes = {
  ...withChildrenPropTypes,
};

export default LoginFormContainer;
