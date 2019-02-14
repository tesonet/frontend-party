import React from 'react';
import Logo from '../UI/Logo';

const Header = (props) => (
    <div className="logged-header">
        <div className="row logged-header-top ">
            <div className="col-sm">
                <div className="logged-header-top-left">
                    <Logo className="login-box--logo-dark"/>
                </div>
            </div>
            <div className="col-sm logged-header-top-div">
                <div className="logged-header-top-right">
                    <div className="logged-header-top-right-box" onClick={props.onClick}>
                        <img src="/assets/logout-icon.png" alt="logo"></img>
                        <span>Logout</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="row logged-header-bottom">
            <div className="col logged-header-bottom-left">
                <span>Server</span>
            </div>
            <div className="col logged-header-bottom-right">
                <span>Distance</span>
            </div>
        </div>
    </div>
);

export default Header;