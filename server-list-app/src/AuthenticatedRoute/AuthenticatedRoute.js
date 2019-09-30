import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import Authentication from "../Utils/Authentication.js"

export class AuthenticatedRoute extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      const isAuthenticated = Authentication.isAuthenticated();
  
      return (
        isAuthenticated ? <Route exact={this.props.exact} path={this.props.path} render={() => this.props.component} /> : <Redirect to="/login" />
      );
  
    }
  }

  export default AuthenticatedRoute;