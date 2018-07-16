import React from 'react'
import './FormInput.scss';

const FormInput = ({ id, name, type, placeholder, value, onChange, icon }) => (
    <div className="FormInput form-group">
        <div className="input-group">
            <div className="input-group-prepend">
                <span className="input-group-text">
                   <img alt={name} src={icon} />
                </span>
            </div>
            <input
                type={type}
                placeholder={placeholder}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                className="form-control"
            />
        </div>
    </div>
);

export default FormInput;
