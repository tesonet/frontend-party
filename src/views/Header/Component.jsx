import React from 'react';
import cn from 'classnames';

import styles from './styles.scss';

const Header = props => (
  <div className={cn('row', styles.header)}>
    <div className={cn('col-9 col-xs-12', styles.main)}>
      <img
        src="/static/img/logo.png"
        alt="Testio"
        width={115}
        height={30}
        className={styles.logo}
      />
    </div>
    <div className={cn('col-3 col-xs-12', styles.aside)}>
      <button onClick={props.logout}>&#x21e4; Logout</button>
    </div>
  </div>
);

export default Header;
