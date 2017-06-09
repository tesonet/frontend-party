import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './styles.scss';

const Header = props => (
  <div className={cn('row', styles.header)}>
    <div className={cn('col-xs-9', styles.main)}>
      <img
        src="/static/img/logo.png"
        alt="Testio"
        width={115}
        height={30}
        className={styles.logo}
      />
    </div>
    <div className={cn('col-xs-3', styles.aside)}>
      <button onClick={props.logout}>&#x21e4; Logout</button>
    </div>
  </div>
);

Header.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default Header;
