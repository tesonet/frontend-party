import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from '../views/Header';
import Servers from '../views/Servers';

const PrivateRoutesComponent = (props) => {
  if (props.token) {
    return (
      <div className="container-fluid">
        <Header />
        <Route exact path="/" component={Servers} />
      </div>
    );
  }
  if (props.location.pathname !== '/login') {
    return <Redirect to="/login" />;
  }
  return null;
};

PrivateRoutesComponent.propTypes = {
  token: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]).isRequired,
  location: PropTypes.PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default PrivateRoutesComponent;
