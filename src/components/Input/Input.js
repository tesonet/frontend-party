import React, {Component} from 'react';
import personIcon from '../../assets/img/person-icon.png';
import lockIcon from '../../assets/img/lock-icon.png';

class Input extends Component {
    
    render () {
        const { type, placeholder, className, id, value, changed, icon } = this.props;
        let iconImage = personIcon;

        if (icon === 'lock') {
            iconImage = lockIcon;  
        } else if (icon === 'person') {
            iconImage = personIcon;  
        } 
        
        return (            
        <div className="row justify-content-center">
            <div className="col-xs-6 col-sm-4 login-box--row">
                <div>
                    <img src={iconImage} alt="Icon"></img>  
                </div>
                <input type={type} placeholder={placeholder} className={className} id={id} value={value} onChange={changed}></input>
            </div>
        </div>   
        );
    }

}

export default Input;