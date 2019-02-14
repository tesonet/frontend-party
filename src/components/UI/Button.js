import React from 'react';

const Button = (props) => (
    <div className="row justify-content-center">                                              
        <button type={props.type} disabled={props.disabled} className="col-xs-6 col-sm-4 login-box--button">{props.title}</button> 
    </div> 
)

export default Button;