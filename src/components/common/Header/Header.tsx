import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from './assets/logo-testio-small.png';
import logOut from './assets/logout.svg';
import { withRouter } from 'react-router-dom';

interface Props extends RouteComponentProps<any> {}
const HeaderComponent: React.FC<Props> = ({ history }) => {
  const onLogOut = () => {
    localStorage.removeItem('auth-token');
    history.push('/');
  };
  return (
    <div className={styles.container}>
      <img data-test="header-logo" src={logo} alt="Testio" />
      <button
        data-test="logout-button"
        className={styles.logoutButton}
        onClick={onLogOut}
      >
        <img src={logOut} alt="logout" />
        Logout
      </button>
    </div>
  );
};

export const Header = withRouter(HeaderComponent);
