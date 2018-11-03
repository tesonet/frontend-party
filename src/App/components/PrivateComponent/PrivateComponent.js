import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Keys from '../../utils/keys';

class PrivateComponent extends Component {
  render() {
    const { component: Component, ...rest } = this.props;
    let token = localStorage.getItem(Keys.TOKEN);

    return (
      <Route
        {...rest}
        render={props =>
          token ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }
}

PrivateComponent.propTypes = {
  component: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
}


export default PrivateComponent;