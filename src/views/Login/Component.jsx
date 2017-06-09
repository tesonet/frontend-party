import React from 'react';
import Icon from 'react-fa';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import cn from 'classnames';
import styles from './styles.scss';

class Login extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    if (username && password) {
      this.props.login(username, password);
    }
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };

    if (this.props.token) {
      return <Redirect to={from} />;
    }

    return (
      <div className={cn('container', styles.container)}>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <img
            src="/static/img/logo-front.png"
            alt="Testio"
            width={246}
            height={65}
            className={styles.logo}
          />
          <p><input type="text" name="username" required placeholder="Username" /></p>
          <p><input type="password" name="password" required placeholder="Password" /></p>
          {!!this.props.error && <p className={styles.error}>{this.props.error}</p>}
          <p>
            <button type="submit" disabled={this.props.loading}>
              {this.props.loading ? <Icon spin name="spinner" /> : 'Log In'}
            </button>
          </p>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  token: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]).isRequired,
  location: PropTypes.PropTypes.shape({
    state: PropTypes.string,
  }).isRequired,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  loading: PropTypes.bool.isRequired,
};

Login.defaultProps = {
  error: '',
};

export default Login;
