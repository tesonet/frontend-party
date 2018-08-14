import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';
import ReactSVG from 'react-svg';

const input = ({ id, label, type, icon, value, onChange }) => {
    let svg = null;
    if (icon) {
        switch (icon) {
            case 'user':
                svg = <ReactSVG path="assets/svg/user.svg" className="icon"/>;
                break;
            case 'lock':
                svg = <ReactSVG path="assets/svg/lock.svg" className="icon"/>;
                break;
        }
    }
    const prepend = svg ? (
        <div className="input-group-prepend">
            <span className="input-group-text">{svg}</span>
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