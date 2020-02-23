import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import logoImg from '../../../images/logo-testio-invert.png';
import LogoutIcon from '../../../images/logout.svg';
import Container from '../Container';
import styles from './Header.module.scss';

const Header = () => {
  const history = useHistory();

  function logout() {
    history.push('/login');
  }

  return (
    <header className={styles['header']}>
      <Container>
        <div className={styles['content']}>
          <div className={styles['logo-holder']}>
            <img src={logoImg} alt="" />
            <Link to="/" />
          </div>
          <div
            className={styles['button-logout']}
            onClick={logout}
            onKeyDown={logout}
            role="button"
            tabIndex="0"
          >
            <LogoutIcon />
            Logout
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
