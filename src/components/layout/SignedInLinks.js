import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
import logout from '../../images/logout.svg';

const SignedInLinks = (props) => {
  return (
    <div>
      <ul>
        <li><a className="logout" onClick={props.signOut}><img src={logout} alt="Logout icon" /> Log Out</a></li>
      </ul>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);