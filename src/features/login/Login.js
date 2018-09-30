import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Error from '../../components/error/Error';
import style from './Login.scss';
import logo from '../../assets/images/login-testio.png';
import { login } from './login-api';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      username: '',
      password: '',
    };
  }

  inputChanged(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  login(e) {
    e.preventDefault();

    const { username, password } = this.state;

    login({ username, password }).then(
      () => {
        const { history } = this.props;
        history.push('/servers');
      },
      (err) => {
        this.setState({ error: err.message });
      },
    );
  }

  render() {
    const { error } = this.state;
    return (
      <div className={style.login}>

        <div className={style.bg} />

        <form
          className={style.box}
          onSubmit={(event) => { this.login(event); }}
          ref={(form) => { this.loginForm = form; }}
        >

          <div className={style.logo}>
            <img src={logo} alt="Logo" />
          </div>

          <Error message={error} />

          <input id="username" className={style.username} name="username" type="text" onChange={this.inputChanged.bind(this)} placeholder="Username" required />
          <input id="password" className={style.password} name="password" type="password" onChange={this.inputChanged.bind(this)} placeholder="Password" required />
          <input className={style.button} type="submit" value="Log In" />

        </form>
      </div>
    );
  }
}

Login.defaultProps = {
  history: {},
};

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

export default withRouter(Login);
