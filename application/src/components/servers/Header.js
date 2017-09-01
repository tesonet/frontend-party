import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/index';
import icon from '../../assets/ico-logout.svg';
import logoDark from '../../assets/logo-dark.png';
import './styles/HeaderStyle.css';

class Header extends Component {

  sortByName(a,b) {

    const one = a.name.toUpperCase();
    const two = b.name.toUpperCase();

    let compare = 0;

    (one > two) ? compare = 1 : compare = -1;

    return compare;

  }

  render() {
    return(
      <div className='header'>
          <div className='top row'>
            <div className='col-xs-1'><img src={logoDark} alt={'Testio logo'} /></div>
            <div className='right log-out col-xs-1 col-xs-offset-10' onClick={() => {this.props.logout()}}>
            <img src={icon} className='logout-icon' alt='logout' />
            Log out</div>
          </div>
          <div className='info row'>
              <div className='col-xs-1' onClick={() => {this.props.servers.servers.sort(this.sortByName)}}>Server</div>
              <div className='right col-xs-1 col-xs-offset-10'>Distance</div>
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
