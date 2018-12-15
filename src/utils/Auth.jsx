import React from "react";
import history from "./history";

import { getToken } from "../api/api";

class Auth extends React.Component {
  state = {
    isAuthenticated: false,
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      this.setState({ isAuthenticated: true });
      history.push("/list");
    }
  }

  authenticate = async credentials => {
    const response = await getToken(credentials);
    localStorage.setItem("token", response.token);

    this.setState({ isAuthenticated: true });
    history.push("/list");
  };

  logout = () => {
    localStorage.removeItem("token");

    this.setState({ isAuthenticated: false });
    history.push("/");
  };

  helperFunctions = () => ({
    logout: this.logout,
    authenticate: this.authenticate,
    isAuthenticated: this.state.isAuthenticated,
  });

  render() {
    return this.props.children(this.helperFunctions());
  }
}

export default Auth;
