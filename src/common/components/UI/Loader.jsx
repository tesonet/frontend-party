import React from 'react';
import ReactLoaderAdvanced from 'react-loader-advanced';
import { ImSpinner8 } from 'react-icons/im';
import PropTypes from 'prop-types';

import { withChildrenPropTypes, withDefaultChildrenPropTypes } from '../../propTypes';

const Loader = ({ loaded, children }) => (
  <ReactLoaderAdvanced
    show={!loaded}
    message={(
      <ImSpinner8
        className="animate-spin text-tesonet-purple-900 m-auto"
        size={40}
      />
    )}
  >
    {children}
  </ReactLoaderAdvanced>
);

Loader.defaultProps = {
  ...withDefaultChildrenPropTypes,
};

Loader.propTypes = {
  loaded: PropTypes.bool.isRequired,
  ...withChildrenPropTypes,
};

export default Loader;
