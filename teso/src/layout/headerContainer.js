import React, { PureComponent } from 'react';
import logo from '../images/header-logo.svg';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';
import './headerContainer.css';

const cookies = new Cookies();

class Header extends PureComponent {
  state = {
    shouldLogout: false
  };

  onLogoutClick = () => {
    cookies.remove('token')
    this.setState(() => ({
      shouldLogout: true
    }));
  };

  render() {
    if (this.state.shouldLogout) {
      return <Redirect to='/login' />
    }

    return (
      <div className="sticky top-0 pt-4 pb-4 bg-white z-10">
        <img src={logo} className="pl-6" alt="logo" />
        <button className="absolute top-0 mt-4 right-0 mr-6 px-4 header__logout-button" onClick={this.onLogoutClick} type="button">&#xf08b; Logout</button>
      </div>
    );
  }
}

export default Header;
