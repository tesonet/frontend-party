import React, { Component } from 'react';
import Logo from '../../components/Logo/Logo';
import Auth from '../../components/Auth/Auth';

class LoginPage extends Component {
  
    render () {
        return (           
            <section className="login">           
                <div className="container login-box">
                <div className="row justify-content-center">
                    <div className="col-xs-6 col-sm-4">
                        <Logo white className="login-box--logo"/>
                    </div>
                </div>
                    <Auth/>   
                </div>
            </section>                       
        );
    } 
}

export default LoginPage;

