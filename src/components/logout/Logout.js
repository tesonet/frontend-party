import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import style from './Logout.scss';
import { removeToken } from '../../api/auth-token';

class Logout extends Component {
  logout(e) {
    e.preventDefault();

    removeToken(); // todo: invalidate token on server?

    const { history } = this.props;
    history.push('/servers');
  }

  render() {
    return (
      <div className={style.logout}>
        <a href="/" onClick={(event) => { this.logout(event); }}>logout</a>
      </div>
    );
  }
}

Logout.defaultProps = {
  history: {},
};

Logout.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

export default withRouter(Logout);
