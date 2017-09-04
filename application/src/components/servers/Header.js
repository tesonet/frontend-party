import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/index';
import logoDark from '../../assets/logo-dark.png';
import './styles/HeaderStyle.css';

class LogoutIcon extends Component {
  render() {
    return(
      <svg className="logout-icon" width="16" height="16" viewBox="0 0 16 16">
        <path id="ico-logout" d="M3027,54l-4,4,4,4V59h6V57h-6V54Zm11,12h-9a0.945,0.945,0,0,1-1-1V62h2v2h7V52h-7v2h-2V51a0.945,0.945,0,0,1,1-1h9a0.945,0.945,0,0,1,1,1V65A0.945,0.945,0,0,1,3038,66Z" transform="translate(-3023 -50)"/>
      </svg>
    )
  }
}

class Header extends Component {
  render() {
    return(
      <div className='header'>
          <div className='top row'>
            <div className='col-xs-6'><img src={logoDark} alt={'Testio logo'} /></div>
            <div className='col-xs-6 right log-out'>
              <div className='' onClick={() => {this.props.logout()}}>
            <LogoutIcon />
            <span>Logout</span></div></div>
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
