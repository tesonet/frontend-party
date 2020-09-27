import React, { memo } from 'react';
import passwordIcon from '../../../assets/password-icon.svg';
import FormTextField from './FormTextField';

const PasswordFieldWrapper = (props) => (
    <div className="field-wrapper">
        <img src={passwordIcon} alt="" className="login-icon" />
        <FormTextField {...props} type="password" />
    </div>
);

export default memo(PasswordFieldWrapper);
