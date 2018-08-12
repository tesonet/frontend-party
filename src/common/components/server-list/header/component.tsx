import * as React from 'react';
import * as styles from './styles.scss';

const Header: React.SFC = () => (
  <div className={styles.header}>
    <span>Server</span>
    <span>Distance</span>
  </div>
);

export default Header;
