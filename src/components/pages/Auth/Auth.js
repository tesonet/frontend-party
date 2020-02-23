import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import backgroundImg from '../../../images/background.png';
import logoImg from '../../../images/logo-testio.png';
import LockIcon from '../../../images/lock.svg';
import UserIcon from '../../../images/user.svg';
import TextField from '../../shared/TextField';
import Button from '../../shared/Button';
import useFetch from '../../hooks/useFetch';
import styles from './Auth.module.scss';

const Auth = () => {
  const history = useHistory();
  const [request, isFetching] = useFetch('/tokens');
  const [showError, setShowError] = useState(false);
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  useEffect(() => {
    localStorage.removeItem('token');
  }, []);

  function login(e) {
    e.preventDefault();

    request
      .post(credentials)
      .then(({ token }) => {
        localStorage.setItem('token', token);
        history.push('/');
      })
      .catch(() => {
        setShowError(true);
      });
  }

  function updateCredentials(value) {
    setCredentials(prevState => ({
      ...prevState,
      ...value
    }));
  }

  return (
    <div
      className={styles['auth']}
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className={styles['content']}>
        <img src={logoImg} alt="testio" className={styles['logo']} />
        <form onSubmit={login}>
          <TextField
            icon={<UserIcon />}
            label="Username"
            required
            value={credentials.username}
            onChange={username => updateCredentials({ username })}
          />
          <TextField
            icon={<LockIcon />}
            label="Password"
            type="password"
            required
            value={credentials.password}
            onChange={password => updateCredentials({ password })}
          />

          {!!showError && (
            <div className={styles['auth-error']}>
              The username or password is incorrect
            </div>
          )}

          <Button type="submit" disabled={isFetching}>
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
