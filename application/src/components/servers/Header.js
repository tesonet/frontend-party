import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/index';
import icon from '../../assets/ico-logout.svg';
import logoDark from '../../assets/logo-dark.png';
import './styles/HeaderStyle.css';

class Header extends Component {
  render() {
    return(
      <div className='header'>
          <div className='top row'>
            <div className='col-xs-6'><img src={logoDark} alt={'Testio logo'} /></div>
            <div className='col-xs-6 right log-out'>
              <div className='' onClick={() => {this.props.logout()}}>
            <img src={icon} className='logout-icon' alt='logout' />
            Log out</div></div>
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.LoginReducer,
    servers: state.ServersReducer
  }
}

const mapDispatchToProps = (dispatch) => {
return {
  logout: () => {
    dispatch(logout());
  }
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
