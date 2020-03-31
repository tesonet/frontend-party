import React from 'react';
import styles from './Header.module.scss';
import logo from './assets/logo-testio-small.png';
import logOut from './assets/logout.svg';

export const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <img data-test="header-logo" src={logo} alt="Testio" />
      <button data-test="logout-button" className={styles.logoutButton}>
        <img src={logOut} alt="logout" />
        Logout
      </button>
    </div>
  );
};
