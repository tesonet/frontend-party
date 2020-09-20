import React, { memo } from 'react';
import usernameIcon from '../../../assets/username-icon.svg';
import FormTextField from './FormTextField';

const UsernameFieldWrapper = (props) => (
    <div className="field-wrapper">
        <img src={usernameIcon} alt="" className="login-icon" />
        <FormTextField {...props} />
    </div>
);

export default memo(UsernameFieldWrapper);
