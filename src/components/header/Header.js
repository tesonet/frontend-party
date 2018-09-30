import React from 'react';
import style from './Header.scss';
import Logo from '../logo/Logo';
import Logout from '../logout/Logout';

export default () => (
  <div className={`container ${style.header}`}>
    <div className="row">
      <div className="col">
        <Logo />
      </div>
      <div className="col">
        <Logout />
      </div>
    </div>
  </div>
);
