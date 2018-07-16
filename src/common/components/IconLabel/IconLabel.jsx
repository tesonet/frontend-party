import React from 'react';
import './IconLabel.scss';

const IconLabel = ({ icon, children, onClick }) => (
    <div className="IconLabel" onClick={onClick}>
        <img className="mr-2" alt="Logo" src={icon} />
        <span>{ children }</span>
    </div>
);

export default IconLabel;
