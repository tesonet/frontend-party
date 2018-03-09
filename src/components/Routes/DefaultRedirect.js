import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { ROUTE_LOGIN } from '../../constants/routes';

const DefaultRedirect = props => (
  <Redirect
    to={{
      pathname: ROUTE_LOGIN,
      state: { from: props.location },
    }}
  />
);

DefaultRedirect.propTypes = {
  location: PropTypes.object.isRequired,
};

export default DefaultRedirect;
