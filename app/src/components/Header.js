import React , { Component } from 'react';
import '../sass/header.scss';
import { withRouter } from 'react-router-dom';
import { unsetAuthorizationToken } from '../utils/authorization.js';

class Header extends Component {
  logOut = () => {
    unsetAuthorizationToken();
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="row justify-content-between header-container">
        <div className="col-8">
          <img className="header-logo" src="static/images/logotype-testio-dark.png" alt="logo"/>
        </div>
        <div className="col-4">
          <div className="header-logout-container">
            <button onClick={this.logOut} className="btn btn-light header-logout-btn">
              <div className="header-logout-logo-container">
                <object type="image/svg+xml" data="static/images/ico-logout.svg">
                  icon
                </object>
              </div>
              Log Out
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Header);