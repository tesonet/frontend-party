import React from 'react'
import { connect } from "react-redux";
import { onInputChange } from "../actions/userActions/loginActions";
import Logo from "../assets/svg/logo";
import IconUsername from "../assets/svg/user.svg";
import IconPassword from "../assets/svg/lock.svg";

const LoginPage = ({ onInputChange }) => {

    return (
        <div className="wrapper">
            <div className="gs-overlay gs-overlay--dark">
                <section className="inner">
                    <Logo/>
                    <div className="login-form">
                        <div className="login-form--field">
                            <img src={IconUsername} alt=""/>
                            <input
                                onChange={onInputChange} 
                                type="text"
                                name="username"
                                placeholder="Username"/>
                        </div>
                        <div className="login-form--field">
                            <img src={IconPassword} alt=""/>
                            <input
                                onChange={onInputChange} 
                                type="Password"
                                name="password"
                                placeholder="Password"/>
                        </div>
                        <button>Log In</button>
                    </div>
                </section>
            </div>
        </div>
    )
}

const mapStateToProps = state => state.login;

const mapDispatchToProps = dispatch => ({
    onInputChange: e => dispatch(onInputChange(e))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)