import React, { Fragment } from 'react';
import { Icons } from '../../common/constants';
import UserIcon from '../../static/user.svg';
import LockIcon from '../../static/lock.svg';
import LogoutIcon from '../../static/logout.svg';

type Props = {
    icon: Icons;
};

const Icon = ({ icon }: Props) => {
    switch (icon) {
        case Icons.USER:
            return <UserIcon />;
        case Icons.LOCK:
            return <LockIcon />;
        case Icons.LOGOUT:
            return <LogoutIcon />;
        default:
            return <Fragment />;
    }
};

export default Icon;
