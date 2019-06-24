import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class PrivateRoute extends Component {
  render() {
    const { component: Component, ...props } = this.props;

    return (
      <Route
        {...props}
        render={props => (
          this.props.authToken ?
            <Component {...props} /> :
            <Redirect to='/login'/>
        )}
      />
    );
  }
}

const mapStateToProps = ({ authToken }) => {
  return {
    authToken
  };
};

export default connect(mapStateToProps)(PrivateRoute);
