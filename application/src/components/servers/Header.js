import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/index';

class Header extends Component {
  render() {
    return(
      <div className='header'>
          <button onClick={() => {this.props.logout()}} >Log out</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
return {
  logout: () => {
    dispatch(logout());
  }
}
}

export default connect(null, mapDispatchToProps)(Header);
