import React from 'react';
import { ReactComponent as Username } from '../../../assets/svg/username.svg';
import { ReactComponent as Password } from '../../../assets/svg/password.svg';
import { ReactComponent as Logout } from '../../../assets/svg/logout.svg';

const Icon = ({ name, className }) => {
    switch (name) {
        case 'username':
            return <Username className={className} />;
        case 'password':
            return <Password className={className} />;
        case 'logout':
            return <Logout className={className} />;
        default:
            return null;
    }
};

export default Icon;
