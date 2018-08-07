import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

const input = ({ id, label, type, icon, value, onChange }) => {
    const Icon = icon;
    const prepend = Icon ? (
        <div className="input-group-prepend">
            <span className="input-group-text"><Icon/></span>
        </div>
    ) : '';
    
    return (
        <div className="input-group mb-3">
            {prepend}
            <input
                id={id}
                type={type ? type : 'text'}
                className="form-control"
                placeholder={label}
                aria-label={label}
                value={value ? value : ''}
                autoComplete="false"
                onChange={onChange}
            />
        </div>
    );
};

input.propTypes = {
    label: PropTypes.string
};

export default input;