import React from 'react';
import style from './Logo.scss';
import logo from '../../assets/images/testio.png';

const Logo = () => (
  <div className={style.logo}>
    <img src={logo} alt="Testio Logo" />
  </div>
);

export default Logo;
