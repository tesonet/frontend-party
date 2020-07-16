import React, { Component } from "react";
import { Input } from "../../Components/Input/Input";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };
  render() {
    const { username } = this.state;

    return (
      <div className="login-page">
        <div className="login__wrap">
          <div className="login__logo"></div>
          <div className="login__form">
            <Input
              placeholder="Username"
              value={username}
              onChange={(username) => this.setState({ username })}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
