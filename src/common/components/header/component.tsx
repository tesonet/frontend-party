import Logo from 'common/assets/logo-dark.svg';
import LogOutButton from 'common/components/logout-button';
import * as React from 'react';
import * as styles from './styles.scss';

const Header: React.SFC = () => (
  <header className={styles.header}>
    <Logo />
    <div style={{ display: 'inline-block' }}>
      <LogOutButton />
    </div>
  </header>
);

export default Header;
