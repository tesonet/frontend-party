import React, { Component } from 'react';
import { connect } from 'react-redux';


class PageNotFound extends Component {

  render() {
    return (
      <div>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you were looking for does not exist.</p>
        <p>You will be redirected to {(this.props.login.token && this.props.login.userAuthenticated) ? "servers" : "login"} page in a few seconds</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.LoginReducer
  }
}



export default connect(mapStateToProps)(PageNotFound);
