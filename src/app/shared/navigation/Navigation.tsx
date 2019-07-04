import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation: React.FC<any> = (props) => {
  return process.env.NODE_ENV === 'development'
    ? (
      <div>
        <ul style={{ paddingLeft: '0px' }}>
          {[['/', 'Home'], ['/login', 'Login'], ['/servers', 'Servers'], ['/about', 'About']].map(([path, text], i) => (<li key={i} style={{ display: 'inline-block', margin: '0 10px' }}>
            <NavLink exact to={path} activeStyle={{ border: '1px solid green' }}>{text}</NavLink>
          </li>))}
        </ul>
      </div>
    )
    : null;
};
