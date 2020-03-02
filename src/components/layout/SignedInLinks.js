import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
  return (
    <div>
      <ul>
        <li><NavLink to='/' className="logout">Log Out <i className="fas fa-sign-out-alt"></i></NavLink></li>
      </ul>
    </div>
  )
}

export default SignedInLinks;