import React from 'react';
import { Link } from 'react-router';

import logo from '../images/logo.png';

class LoginView extends React.Component {
  render() {
    return (
      <div className="login-bg d-table min-h-100vh h-100vh w-100">
            <div className="d-table-cell align-middle">
                <div className="container container-login min-h-auto min-h-init mx-auto">
                  <img src={logo} className="app-logo" height="65px" alt="testio" />
                  <form>
                    <div className="form-group has-icon">
                      <input className="form-control" type="text" placeholder="Username" />
                      <i className="form-control-icon" data-icon="U" aria-hidden="true"></i>
                    </div>
                    <div className="form-group has-icon">
                      <input className="form-control" type="password" placeholder="Password" />
                      <i className="form-control-icon" data-icon="L" aria-hidden="true"></i>
                    </div>
                    <Link to="/servers" className="btn btn-primary btn-block">Log in</Link>
                    {/*<button className="btn btn-primary btn-block" type="submit">Log in</button>*/}
                  </form>
                </div>
            </div>
      </div>
    )
  }
}

export default LoginView;
