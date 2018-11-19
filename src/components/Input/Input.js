import React from 'react';
import IconPerson from '../IconPerson/IconPerson';

const input = (props) => (
    <div className="row justify-content-center">
        <div className="col-xs-6 col-sm-4 login-box--row">
            <IconPerson icon="lock" />            
            <input type={props.type} placeholder={props.placeholder} className={props.className} id={props.id}></input>
        </div>
    </div> 
)




export default input;