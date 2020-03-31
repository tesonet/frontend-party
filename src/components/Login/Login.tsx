import React from 'react';
import cn from 'classnames';
import logo from './assets/logo-testio.png';
import styles from './Login.module.scss';

export const Login: React.FC = () => {
  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    
    event.preventDefault();
    const data = new FormData(event.target as HTMLFormElement);
    const username = data.get('username');
    const password = data.get('password');

    console.log({ username, password });
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
          required
        />
        <input
          data-test="password"
          name="password"
          className={cn(styles.input, styles.password)}
          type="password"
          placeholder="Password"
          required
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
