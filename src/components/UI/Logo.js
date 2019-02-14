import React from 'react';
import whiteLogo from '../../assets/img/testio-logo-white.png';
import darkLogo from '../../assets/img/testio-logo-dark-blue.png';

const Logo = (props) => (
    <div className={props.className}>     
        <img src={props.white ? whiteLogo : darkLogo } alt="Testio logo" />
    </div>
)

export default Logo;



