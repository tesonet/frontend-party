import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import './LogIn.css';
// import './LogIn.scss';

import Logotype from '../../components/Logotype/Logotype';
import testio from '../../assets/images/log-in/logotype-testio.-833x215.png';

import Input from '../../components/Input/Input';
import user from '../../assets/images/log-in/icon-user-15x17.png';
import lock from '../../assets/images/log-in/icon-lock-15x19.png';
import Button from '../../components/Button/Button';

import apiTesonetTokens from '../../api/tesonet/tokens';
import database from '../../database/database';

class LogIn extends Component {
  constructor() {
    super();

    this.state = { error: null };
  }

  buttonLogIn(event) {
    event.preventDefault();

    const username = document.getElementById('input-username').value;
    const password = document.getElementById('input-password').value;

    apiTesonetTokens
      .loginData({username: username, password: password})
      .then(response => database.token.create(response.data.token))
      .catch(error => this.setState({ error }));
  }

  componentDidMount() {
    document.getElementById('button-log-in').onclick = this.buttonLogIn;
  }

  render() {
    document.title = `${document.title} - Log In`;

    return (
      <div id="LogIn">
        <div className="background-color container-fluid">
          <Logotype alt="Logotype testio." id="logotype-testio" src={testio} />
          <form>
            <Input
              iconAlt="Icon user" iconId="icon-user" iconSrc={user}
              inputId="input-username" inputPlaceholder="Username" inputType="text"
            />
            <Input
              iconAlt="Icon lock" iconId="icon-lock" iconSrc={lock}
              inputId="input-password" inputPlaceholder="Password" inputType="password"
            />
            {/* <Link to="/server-list"> */}
              <Button buttonId="button-log-in" buttonText="Log In" />
            {/* </Link> */}

            {/* <div className="alert alert-danger mt-3"> */}
            <div>
              {this.state.error}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LogIn;
