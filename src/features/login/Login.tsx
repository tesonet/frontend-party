import React from 'react';
import styles from './Login.module.scss';
import logo from '../../resources/svg/logo.svg';

const LogIn: React.FC = () => {
    return (
        <div className={styles.background}>
            <img src={logo}/>

        </div>
    )
}

export default LogIn;
