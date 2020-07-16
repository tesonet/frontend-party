import React, { Component } from "react";
import { Input } from "../../Components/Input/Input";
import { Button } from "../../Components/Button/button";
import userIcon from "../../assets/img/user.svg";
import lockIcon from "../../assets/img/lock.svg";
import logo from "../../assets/img/logo@2x.png";

class Login extends Component {
  state = {
    username: "",
    password: "",
    usernameError: "",
    passwordError: "",
  };

  validateForm() {
    const { username, password } = this.state;
    let valid = true;
    this.setState({ usernameError: "", passwordError: "" });

    if (username === "") {
      this.setState({ usernameError: "Please enter your username" });
      valid = false;
    }

    if (password === "") {
      this.setState({ passwordError: "Please enter your password" });
      valid = false;
    }

    if (!valid) return;
  }

  render() {
    const { username, password, usernameError, passwordError } = this.state;

    return (
      <div className="login-page">
        <div className="login__wrap">
          <div className="login__logo">
            <img src={logo} alt="Testio logo" width="246" height="64" />
          </div>
          <div className="login__form">
            <Input
              placeholder="Username"
              type="text"
              icon={userIcon}
              value={username}
              onChange={(username) => this.setState({ username })}
              error={usernameError}
            />
            <Input
              placeholder="Password"
              type="password"
              icon={lockIcon}
              value={password}
              onChange={(password) => this.setState({ password })}
              error={passwordError}
            />
            <Button label="Log In" onClick={() => this.validateForm()} />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
