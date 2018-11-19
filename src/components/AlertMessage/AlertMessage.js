import React, { Component } from 'react';
import $ from 'jquery';

class AlertMessage extends Component {
        
    closeError = () => {
    //    Wrong password block disapears 
        $('.wrong-password-button').click(() => {
            $('.wrong-password').delay(50).fadeOut('slow');
        });    
    };

        render () {
            return (
                <div className="wrong-password">
                    <div>
                        <span>ERROR!</span>
                    </div>
                    <div>                    
                        <span>You have entered incorrect username or password.</span>
                        <br></br>
                        <span>Please try again</span>
                    </div>
                    <div className="login-box--button wrong-password-button" onClick={this.closeError}>
                        <span>OK</span>
                    </div>
                </div>
            );
        }   
}

export default AlertMessage;