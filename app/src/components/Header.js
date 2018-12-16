import React from 'react';
import '../sass/header.scss';
import { withRouter } from 'react-router-dom';
import { unsetAuthorizationToken } from '../utils/authorization.js';

const Header = (props) => {
  const logOut = () => {
    unsetAuthorizationToken();
    props.history.push('/');
  }

  return (
    <div className="row justify-content-between header-container">
      <div className="col-8">
        <img className="header-logo" src="static/images/logotype-testio-dark.png" alt="logo"/>
      </div>
      <div className="col-4">
        <div className="header-logout-container">
          <button onClick={logOut} className="btn btn-light header-logout-btn">
            <div className="header-logout-logo-container">
              <object type="image/svg+xml" data="static/images/ico-logout.svg" className="logo">
              </object>
            </div>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Header);