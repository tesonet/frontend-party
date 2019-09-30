import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./Login.css";
import AuthenticationError from "../AuthenticationError/AuthenticationError.js";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner.js";
import Authentication from "../Utils/Authentication.js"

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      isLoading: false,
      token: "",
      authenticationError: ""
    };

    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  onPasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  onSubmit() {
    this.setState({ isLoading: true });
    Authentication.retrieveToken(this.state.username, this.state.password).then(token => {
      if (token === "") {
        this.setState({ isLoading: false, authenticationError: "Authentication error, password or username may be incorrect, please try again." });
      } else {
        Authentication.storeToken(token);
        this.setState({ isLoading: false, token: token, authenticationError: "" });
      }
    });
  }

  onKeyDown(event) {
    const EnterKeyCode = 13;
    switch (event.keyCode) {
      case EnterKeyCode:
        this.onSubmit();
        break;
      default:
        break;
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.onKeyDown);
  }


  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyDown);
  }

  render() {
    const isAuthenticated = Authentication.isAuthenticated();

    if (isAuthenticated) {
      return (
        <Redirect to='/' />
      );
    }

    return (
      <div className="login-container">
        <img src={require("./resources/logo-testio.webp")} />
        <input type="text" className="login-input username" value={this.state.username} onChange={this.onUsernameChange} placeholder="Username" />
        <input type="password" className="login-input password" value={this.state.password} onChange={this.onPasswordChange} placeholder="Password" />
        <button className="login-input submit" onClick={this.onSubmit}>Log In</button>
        <LoadingSpinner isLoading={this.state.isLoading} />
        <AuthenticationError error={this.state.authenticationError} />
      </div>
    );
  }
}

export default Login; 