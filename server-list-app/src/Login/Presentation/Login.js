import React, { Component } from "react";
import "./Login.scss";
import AuthenticationError from "../../AuthenticationError/AuthenticationError";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";

class LoginPresentation extends Component {
  constructor(props) {
    super(props);    

    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onUsernameChange(event) {
    this.props.onUsernameChange(event.target.value);
  }

  onPasswordChange(event) {
    this.props.onPasswordChange(event.target.value);
  }

  onSubmit() {
    this.props.onSubmit();
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
    
    const { username, password, isLoading, authenticationError } = this.props;
    
    return (
      <div className="login-container">
        <img src={require("./resources/logo-testio.png")} />
        <input type="text" className="login-input username" value={username} onChange={this.onUsernameChange} placeholder="Username" />
        <input type="password" className="login-input password" value={password} onChange={this.onPasswordChange} placeholder="Password" />
        <button className="login-input submit" onClick={this.onSubmit}>Log In</button>
        <LoadingSpinner isLoading={isLoading} />
        <AuthenticationError error={authenticationError} />
      </div>
    );
  }
}

export default LoginPresentation; 