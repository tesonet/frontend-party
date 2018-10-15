import React, {Component} from 'react';
import './assets/style/ServersHeader.scss';
import Logo from './assets/images/logo.png';

class ServersHeader extends Component {

/*Lougout from page. Remove token from local storage and reload the page*/
  logout = e => {
    e.preventDefault()
    localStorage.removeItem("testio_token");
    window.location.reload();
  }
  render() {
    return (<div className="servers-header-container">
      <div>
        <img src={Logo} className="logo" alt="logo"/>
      </div>
      <div className="logout-container" onClick={e => this.logout(e)}>
        <span className="fas fa-sign-out-alt fa-rotate-180"></span>
        <p>Logout</p>
      </div>
        </div>
      );
  }
}

export default ServersHeader;
