import React from 'react';

const AlertMessage = (props) => (    
    <div className="row justify-content-center alert-message">
        <span>Something wrong. {props.message}</span>
    </div>
);

export default AlertMessage;