import React from 'react'
import Logo from "../../svg/logo";
import "./login.scss";

const LoginPage = () => (
    <div className="wrapper">
        <div className="gs-overlay gs-overlay--dark">
            <section className="inner">
                <Logo/>
            </section>
        </div>
    </div>
)

export default LoginPage