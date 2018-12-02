import React, {Component} from 'react';
import IconPerson from '../IconPerson/IconPerson';

class Input extends Component {
    
    render () {
        const { type, placeholder, className, id, value, changed } = this.props;
        
        return (            
        <div className="row justify-content-center">
            <div className="col-xs-6 col-sm-4 login-box--row">
                <IconPerson  />            
                <input type={type} placeholder={placeholder} className={className} id={id} value={value} onChange={changed}></input>
            </div>
        </div>   
        );
    }

}

export default Input;