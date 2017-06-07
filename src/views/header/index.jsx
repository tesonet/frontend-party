import React from 'react';
import cn from 'classnames';
import { connect } from 'react-redux';
import { logout } from '../../actions';

import styles from './index.scss';

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

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(null, mapDispatchToProps)(Header);
