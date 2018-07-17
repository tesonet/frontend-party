import React from 'react'
import PropTypes from 'prop-types';
import './FormInput.scss';

const propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    value: PropTypes.string,
};

const defaultProps = {
    value: '',
};

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

FormInput.propTypes = propTypes;
FormInput.defaultProps = defaultProps;

export default FormInput;
