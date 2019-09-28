import React from 'react';
import styles from './Header.module.scss';
import { SvgImage } from '../../../common/icon';
import darkLogo from '../../../resources/svg/logo-dark.svg';
import logoutIcon from '../../../resources/svg/logout-icon.svg';
import { observer } from 'mobx-react';

interface IProps {
    onClick: () => void;
}

export const Header: React.FC<IProps> = observer((props: IProps) => {
    return (
        <div className={styles.container}>
            <SvgImage
                path={darkLogo}
                width={115}
                height={30}
            />

            <div className={styles.logOut} onClick={props.onClick}>
                <SvgImage path={logoutIcon} className={styles.logOutLogo}/>
                <span>Logout</span>
            </div>
        </div>
    )
});
