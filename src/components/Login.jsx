import React, { Component } from "react";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      unauthorizedError: ""
    };
  }

  componentDidMount() {
    if (localStorage.token) {
      this.props.history.push("/main");
    }
  }

  handleFormSubmit(ev) {
    ev.preventDefault();

    axios
      .post("http://playground.tesonet.lt/v1/tokens", this.state)
      .then(res => {
        const { token } = res.data;
        localStorage.setItem("token", token);
        setAuthToken(token);
        if (localStorage.token) {
          this.props.history.push("/main");
        }
      })
      .catch(err => {
        console.log(err.response.data.message);
        this.setState({ unauthorizedError: err.response.data.message });
      });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    let { username, password, unauthorizedError } = this.state;

    return (
      <div className="login-container">
        <div className="logo">
          testio
          <span className="dot">.</span>{" "}
        </div>
        <div className="login-form">
          <div
            id="login-row"
            className="row justify-content-center align-items-center "
          >
            <form onSubmit={this.handleFormSubmit.bind(this)}>
              <div className="form-group">
                <div className="input-group mb-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className="fa fa-user " />
                    </div>
                  </div>
                  <input
                    value={username}
                    onChange={this.onChange.bind(this)}
                    type="text"
                    name="username"
                    className="form-control"
                    placeholder="Username"
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="input-group ">
                  <div className="input-group-text">
                    <i className="fa fa-lock" />
                  </div>
                  <input
                    value={password}
                    onChange={this.onChange.bind(this)}
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
              </div>

              <input
                type="submit"
                value="Log In"
                className="btn login-btn btn-block"
              />

              <div className="authError">
                {unauthorizedError ? unauthorizedError : ""}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
