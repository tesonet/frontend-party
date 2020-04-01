import React from 'react';
import cn from 'classnames';
import logo from './assets/logo-testio.png';
import { Loader } from '../common/Loader';
import styles from './Login.module.scss';
import { LoginCredentials } from './actions';
import { Redirect } from 'react-router';

export interface Props {
  loginRequest: (payload: LoginCredentials) => void;
  error: string | null;
  authLoading: boolean;
}

export const Login: React.FC<Props> = ({
  loginRequest,
  error,
  authLoading
}) => {
  if (localStorage.getItem('auth-token')) {
    return <Redirect to={{ pathname: '/servers', state: { from: '/' } }} />;
  }
  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.target as HTMLFormElement);
    const username = data.get('username') as string;
    const password = data.get('password') as string;
    loginRequest({ username, password });
  };

  return (
    <div className={styles.container}>
      <img data-test="logo" className={styles.logo} src={logo} alt="Testio" />
      <form
        data-test="login-form"
        className={styles.form}
        onSubmit={onFormSubmit}
      >
        <input
          data-test="username"
          name="username"
          className={cn(styles.input, styles.userName)}
          type="text"
          placeholder="Username"
          disabled={authLoading}
          required
        />
        <input
          data-test="password"
          name="password"
          className={cn(styles.input, styles.password)}
          type="password"
          placeholder="Password"
          disabled={authLoading}
          required
        />
        <button
          data-test="submit-login"
          className={styles.button}
          type="submit"
          disabled={authLoading}
        >
          {authLoading ? <Loader dataTest="loader" /> : 'Log in'}
        </button>
        <div data-test="error" className={styles.errorBox}>{error || null}</div>
      </form>
    </div>
  );
};
