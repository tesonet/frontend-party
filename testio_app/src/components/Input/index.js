import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Input = ({path, type, value, name, placeholder, onChange}) => {
  return (
    <div className='container'>
      <div className='container-icon'>
        <object type='image/svg+xml' data={path}>
            svg
        </object>
      </div>
        <input
          type={type}
          className='form-control container-input'
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
        />
    </div>
  );
}

Input.propTypes = {
  path: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Input;