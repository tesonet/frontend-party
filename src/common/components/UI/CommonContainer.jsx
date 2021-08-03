import React from 'react';

import { withDefaultChildrenPropTypes, withChildrenPropTypes } from '../../propTypes';

const CommonContainer = ({ children }) => (
  <div className="flex justify-center m-4 text-gray-300">
    {children}
  </div>
);

CommonContainer.defaultProps = {
  ...withDefaultChildrenPropTypes,
};

CommonContainer.propTypes = {
  ...withChildrenPropTypes,
};

export default CommonContainer;
