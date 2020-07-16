import React, { Component } from "react";
import { Input } from "../../Components/Input/Input";
import { Button } from "../../Components/Button/Button";
import userIcon from "../../assets/img/user.svg";
import lockIcon from "../../assets/img/lock.svg";
import logo from "../../assets/img/logo@2x.png";
import { grantToken } from "../../api/auth";
import { handleError } from "../../api";
import { connect } from "react-redux";
import { setUserLogin } from "../../actions/user.actions.js";
import { Spinner } from "../../Components/Spinner/Spinner";
class Login extends Component {
  state = {
    isLoading: false,
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
    this.authenticate({ username, password });
  }

  authenticate({ username, password }) {
    this.setState({ isLoading: true });

    grantToken({ username, password })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        this.props.setUserLogin();
        this.props.history.push("/server-list");
      })
      .catch((error) => {
        handleError(error, "Failed to login! Please try again.");
      })
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const {
      isLoading,
      username,
      password,
      usernameError,
      passwordError,
    } = this.state;

    return (
      <div className="login-page">
        {isLoading && <Spinner />}
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

function bindActions(dispatch) {
  return {
    setUserLogin: () => dispatch(setUserLogin()),
  };
}

export default connect(null, bindActions)(Login);
