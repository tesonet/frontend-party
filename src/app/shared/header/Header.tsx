import React from 'react';
import { Logout } from '../logout/Logout';
import { Logo } from '../logo/Logo';

export const Header: React.FC<any> = (props) => (
  <div>
    <div className="header clearfix">
      <div style={{float: 'left'}}>
        <Logo />
      </div>
      <div style={{float: 'right'}}>
        <Logout />
      </div>
    </div>
  </div>
);
