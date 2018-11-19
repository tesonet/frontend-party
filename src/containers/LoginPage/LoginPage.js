import React, { Component } from 'react';
import Logo from '../../components/Logo/Logo';
import AlertMessage from '../../components/AlertMessage/AlertMessage';
import Input from '../../components/Input/Input';
import $ from 'jquery';


class LoginPage extends Component {

    checkPass = () => {
        const username = document.querySelector('#username').value;
        const password = document.querySelector('#password').value;
        const wrongPasswordDiv = document.getElementsByClassName('wrong-password');
        
        if ( username === 'tesonet' && password === 'partyanimal' ) {
            
            $.ajax({
                type: 'POST',
                url: 'http://playground.tesonet.lt/v1/tokens',
                contentType: 'application/x-www-form-urlencoded', 
                data: { username: username, password: password },   
                success: function (result){
                       // Store token to localstorage
                    localStorage.setItem('tokenas', result.token); 
                    document.location = './logged';                   
                },
                error : function (req, status, error) {
                    console.log('error loading data');
                    }
            });           
            
        }
        else {
            wrongPasswordDiv[0].style.display = 'block';        
        }       
        
      };

    render () {
        return (           
            <section className="login">           
                <div className="container login-box">
                    <Logo/>
                    <Input type="text" placeholder="Username" className="login-box--input" id="username"/>
                    <Input type="password" placeholder="Password" className="login-box--input" id="password"/>
                   
                    <div className="row justify-content-center" onClick={this.checkPass}>                                              
                        <button className="col-xs-6 col-sm-4 login-box--button" >
                            <span>Log In</span>
                        </button> 
                    </div>
    
                </div>
                <AlertMessage/>  
            </section>   
                      
        );
    } 
}


export default LoginPage;

