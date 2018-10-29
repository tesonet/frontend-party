import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

class PrivateComponent extends Component {
  render() {
    const { component: Component, auth, ...rest } = this.props;
    let token = localStorage.getItem('token');

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

export default PrivateComponent;