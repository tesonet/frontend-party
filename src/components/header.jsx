import React from 'react';
import { node } from 'prop-types';

import image from '../../assets/images/logo2.png';
import styles from './header.less';

const Header = ({ children, ...props }) => (
    <div className={styles.base} {...props}>
        <img className={styles.logo} src={image} alt="logo" />
        {children}
    </div>
);

Header.propTypes = {
    children: node
};

export default Header;
