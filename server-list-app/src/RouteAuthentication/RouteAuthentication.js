import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Authentication from "../Utils/Authentication.js"

export class RouteAuthentication extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      const isAuthenticated = Authentication.isAuthenticated();
  
      return (
        isAuthenticated ? this.props.component : <Redirect to="/login" />
      );
  
    }
  }

  export default RouteAuthentication;