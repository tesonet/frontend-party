import React from 'react';
import personIcon from '../../assets/img/person-icon.png';

const iconPerson = (props) => {
    return (        
        <img src={personIcon} alt={props.alt}></img>        
    );
}

export default iconPerson;