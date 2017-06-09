import React from 'react';
import cn from 'classnames';

import styles from './styles.scss';

class Header extends React.Component {
  handleLogoutClick = () => this.props.logout();

  render() {
    return (
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
          <button onClick={this.handleLogoutClick}>&#x21e4; Logout</button>
        </div>
      </div>
    );
  }
}

export default Header;
