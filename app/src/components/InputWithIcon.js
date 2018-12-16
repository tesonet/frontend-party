import React from 'react';

const InputWithIcon = ({iconPath, type, value, name, placeHolder, onChange}) => {
  return (
    <div>
      <div className="login-form-group-input-prepend">
        <object type="image/svg+xml" data={iconPath}>
            icon
        </object>
      </div>
        <input
            type={type}
            className="form-control login-form-group-input"
            value={value}
            name={name}
            placeHolder={placeHolder}
            onChange={onChange}
        />
    </div>
  );
}

export default InputWithIcon;