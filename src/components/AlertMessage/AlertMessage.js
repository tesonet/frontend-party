import React from 'react';

const alertMessage = (props) => (    
    <div className="row justify-content-center alert-message">
        <span>Something wrong. {props.message}</span>
    </div>
);


export default alertMessage;