import React from 'react';

import { withChildrenPropTypes, withDefaultChildrenPropTypes } from '@Common/propTypes';

const Container = ({ children }) => (
  <div className="min-h-screen bg-tesonet-gray-900">
    {children}
  </div>
);

Container.defaultTypes = {
  ...withDefaultChildrenPropTypes,
};

Container.propTypes = {
  ...withChildrenPropTypes,
};

export default Container;
