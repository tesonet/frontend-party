import React from 'react'
import Logo from "../assets/svg/logo";
import IconUsername from "../assets/svg/user.svg";
import IconPassword from "../assets/svg/lock.svg";

const LoginPage = () => (
    <div className="wrapper">
        <div className="gs-overlay gs-overlay--dark">
            <section className="inner">
                <Logo/>
                <div className="login-form">
                    <div className="login-form--field">
                        <img src={IconUsername} alt=""/>
                        <input 
                            type="text"
                            placeholder="Username"/>
                     </div>
                     <div className="login-form--field">
                        <img src={IconPassword} alt=""/>
                        <input 
                            type="Password"
                            placeholder="Password"/>
                     </div>
                     <button>Log in</button>
                </div>
            </section>
        </div>
    </div>
)

export default LoginPage