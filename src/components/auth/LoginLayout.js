import React from 'react';
import logo from '../../assets/img/testio_white.png';

const LoginLayout = ({ children }) => (
    <section className="login">
        <div className="login__container">
            <img src={logo} className="login__logo" alt="Logo" />
            {children}
        </div>
    </section>
);

export default LoginLayout;
