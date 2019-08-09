import React, { Component } from "react";
import axios from "axios";

// Config. REST API URL
import Config from "utils/Config";

// Components
import ValidateInput from "utils/ValidateInput";
import FormControl from "common/FormControl/FormControl";
import FormError from "common/FormError/FormError";
import Button from "common/Button/Button";

// Styles, images
import styles from "./LoginForm.module.scss";
import logo from "./images/testio.svg";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: "",
      username: "",
      password: "",
      inputError: {},
      formError: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  isValid() {
    const { inputError, isValid } = ValidateInput(this.state);
    if (!isValid) {
      this.setState({ inputError });
    }
    return isValid;
  }

  onSubmit(e) {
    e.preventDefault();

    // Local state
    const { username, password } = this.state;

    if (this.isValid()) {
      // Reset error messages, and show loading
      this.setState({ inputError: {}, isLoading: "loading" });
      axios
        .post(Config.REST_API_URL + "tokens", {
          username,
          password
        })
        .then(res => {
          localStorage.setItem("testioToken", res.data.token);
          this.props.history.push(Config.DASHBOARD_URL);
        })
        .catch(err => {
          let msg;
          switch (err.response.status) {
            case 401:
              msg = "Wrong user name or password";
              break;
            case 503:
              msg = "Service unavailable";
              break;
            default:
              msg = "Something wrong";
          }
          this.setState({
            formError: msg,
            isLoading: ""
          });
        });
    }
  }

  render() {
    const { inputError, username, password, isLoading } = this.state;
    return (
      <div className={styles.login}>
        <img src={logo} alt="Testio" width="245" />
        <form onSubmit={this.onSubmit} className={styles.form}>
          {this.state.formError && <FormError text={this.state.formError} />}
          <FormControl
            cssModifier="form__control--user"
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={this.onChange}
            error={inputError.username}
          />
          <FormControl
            cssModifier="form__control--pass"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={this.onChange}
            error={inputError.password}
          />

          <Button title="Login" loadingClass={isLoading} />
        </form>
        <footer>
          <a href="#">Create an Account</a> | <a href="#">Reset password</a>
        </footer>
      </div>
    );
  }
}
