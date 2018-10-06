import React from 'react';
import PropTypes from 'prop-types';

import styles from './header.scss';

const Header = (props) => {
    const {
        children,
    } = props;

    return (
        <header className={ styles['header'] }>
            { children }
        </header>
    );
};

Header.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Header;
