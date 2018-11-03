import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

import { FieldGroup, Label, Spinner } from '../../components';
import img from '../../assets/surfing.jpg';
import Api from '../../utils/api';
import Keys from '../../utils/keys';


class Login extends Component {
  constructor(props) {
    super(props);

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.renderError = this.renderError.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.renderButton = this.renderButton.bind(this);
    
    this.state = {
      username: '',
      password: '',
      error: '',
      redirectToMain: false,
      showSpinner: false,
    };
  }

  handleUsernameChange(e) {
    this.setState({ username: e.target.value});
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  async onSubmit(event) {
    const { username, password } = this.state;

    this.setState({ showSpinner: true, error: '' });
    event.preventDefault();
    event.target.reset();

    try {
      const response = await Api.login({ username, password }, 'application/json');

      localStorage.setItem(Keys.TOKEN, response.data.token);
      this.setState({ redirectToMain: true, showSpinner: false })
    } catch(error) {
      console.log(error);
      this.setState({ error: 'Wrong username or password', username: '', password: '', showSpinner: false })
    }
  }

  renderError() {
    const { error } = this.state;

    if (error) {
      return <ErrorText>{error}</ErrorText>
    }

    return null;
  }

  renderButton() {
    const { showSpinner } = this.state;

    if (showSpinner) {
      return <Spinner size="large" />
    }

    return <SubmitButton type="submit">Log In</SubmitButton>
  }

  render() {
    const token = localStorage.getItem(Keys.TOKEN);

    if(token || this.state.redirectToMain) {
      return <Redirect to='/main' />
    }

    return (
      <Content>
        <LoginForm onSubmit={this.onSubmit}>
          <Label size="large" />
          <FieldGroup id="formControlsUsername" type="text" placeholder="Username" onChange={this.handleUsernameChange} />
          <FieldGroup id="formControlsPassword" type="password" placeholder="Password" onChange={this.handlePasswordChange} />
          {this.renderError()}
          {this.renderButton()}
        </LoginForm>
      </Content>
    );
  }
}

const Content = styled.div`
  background: linear-gradient( rgba(12, 0, 80, 0.89), rgba(0, 0, 0, 0.5) ), url(${img});
  background-size: cover;
  min-height: 100%;
	
  width: 100%;
  height: auto;
	
  position: fixed;
  top: 0;
  left: 0;
`;

const SubmitButton = styled(Button)`
  width: 100%;
  height: 45px;
  color: white;
  font-weight: 900;
  font-size: 13px;
  border-width: 0;
  background-color: rgb(149, 207, 45);

  &:hover {
    background-color: #86b300
    color: white;
    border-width: 0;
  }
`;

const LoginForm = styled.form`
  max-width: 350px;
  margin: auto;
  margin-top: 20%;
`;

const ErrorText = styled.div`
  width: 100%;
  font-size: 16px;
  color: rgb(247, 61, 61);
  margin-bottom: 10px;
  text-align: center;
`;

export default Login;
