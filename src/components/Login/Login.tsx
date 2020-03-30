import React from 'react';
import cn from 'classnames';
import logo from './assets/logo-testio.png';
import styles from './Login.module.scss';

export const Login: React.FC = () => {
  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submit');
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
          className={cn(styles.input, styles.userName)}
          type="text"
          placeholder="Username"
        />
        <input
          data-test="password"
          className={cn(styles.input, styles.password)}
          type="text"
          placeholder="Password"
        />
        <button
          data-test="submit-login"
          className={styles.button}
          type="submit"
        >
          Log in
        </button>
      </form>
    </div>
  );
};
