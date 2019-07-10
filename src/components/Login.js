import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { auth } from "../store/actions/actions";
import { Redirect } from "react-router-dom";
import image from "../assets/images/riding-the-waves-3440x1440.jpg";
import { FaUser, FaLock } from "react-icons/fa";
import logo from "../assets/images/logo-testio.png";
import Form from "./styles/FormStyles";

const Wrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  height: 100vh;
  flex-direction: column;
  background: linear-gradient(rgba(25, 35, 62, 0.8), rgba(25, 35, 62, 0.8)),
    url(${image});
  background-size: cover;
  background-repeat: no-repeat;

  .wrapper-logo {
    margin-bottom: 50px;
  }
`;

class Login extends Component {
  state = {
    username: "",
    password: "",
    toServerList: false
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = async e => {
    e.preventDefault();

    await this.props.onAuth(this.state.username, this.state.password);
    if (this.props.token) {
      this.setState({ toServerList: true });
    }
  };

  render() {
    let errorMessage = null;
    if (this.props.error) {
      errorMessage = <p className="form-error-message">{this.props.error}</p>;
    }

    if (this.state.toServerList) {
      return <Redirect to="/server-list" />;
    }

    return (
      <Wrapper>
        <img className="wrapper-logo" src={logo} alt="Testio Logo" />
        <Form onSubmit={this.submitHandler}>
          <fieldset disabled={this.props.loading}>
            {errorMessage}
            <div className="input-container">
              <FaUser
                style={{
                  color: "#cccccc",
                  background: "white",
                  position: "absolute",
                  left: "13px",
                  top: "20px",
                  minWidth: "30px",
                  textAlign: "center"
                }}
              />
              <input
                required
                type="text"
                name="username"
                placeholder="Username"
                value={this.username}
                onChange={this.changeHandler}
              />
            </div>

            <div className="input-container">
              <FaLock
                style={{
                  color: "#cccccc",
                  background: "white",
                  position: "absolute",
                  left: "13px",
                  top: "20px",
                  minWidth: "30px",
                  textAlign: "center"
                }}
              />
              <input
                required
                type="password"
                name="password"
                placeholder="Password"
                value={this.password}
                onChange={this.changeHandler}
              />
            </div>

            <button className="form-button">Log In</button>
          </fieldset>
        </Form>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null,
    loading: state.loading,
    error: state.error,
    token: state.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (username, password) => dispatch(auth(username, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
