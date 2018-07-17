import React from 'react';
import PropTypes from 'prop-types';
import './IconLabel.scss';

const propTypes = {
    icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

const IconLabel = ({ icon, children, onClick }) => (
    <div className="IconLabel" onClick={onClick}>
        <img className="mr-2" alt="Logo" src={icon} />
        <span>{ children }</span>
    </div>
);

IconLabel.propTypes = propTypes;

export default IconLabel;
