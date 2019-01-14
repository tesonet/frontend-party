import React , { Component } from 'react';
import { withRouter } from 'react-router-dom';
import auth from '../../utils/auth';
import LogoutBtn from '../../components/LogoutBtn';
import './styles.scss';

class Header extends Component {
  logout = () => {
    this.props.history.push('/');
    auth.clearAppStorage();
  }

  render() {
    return (
      <div className='row justify-content-between top_container'>
        <div className='col-6 col-sm-8'>
          <img className='logo' src='data/images/dark_logo.png' alt='logo'/>
        </div>
         <LogoutBtn logout={this.logout} />
      </div>
    )
  }
}

export default withRouter(Header);