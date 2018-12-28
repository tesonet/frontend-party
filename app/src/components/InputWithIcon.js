import React from 'react';
import PropTypes from 'prop-types';

const InputWithIcon = ({iconPath, type, value, name, placeHolder, onChange}) => {
  return (
    <div className='login-form-group'>
      <div className='login-form-group-input-prepend'>
        <object type='image/svg+xml' data={iconPath}>
            icon
        </object>
      </div>
        <input
          type={type}
          className='form-control login-form-group-input'
          value={value}
          name={name}
          placeholder={placeHolder}
          onChange={onChange}
        />
    </div>
  );
}

InputWithIcon.propTypes = {
  iconPath: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  placeHolder: PropTypes.string,
  onChange: PropTypes.func,
}

export default InputWithIcon;