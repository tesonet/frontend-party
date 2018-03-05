import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { ROUTE_LOGIN } from '../../constants/routes';

const PageNotFound = props => (
  <Redirect
    to={{
      pathname: ROUTE_LOGIN,
      state: { from: props.location },
    }}
  />
);

PageNotFound.propTypes = {
  location: PropTypes.object.isRequired,
};

export default PageNotFound;
