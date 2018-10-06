import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import LogoIcon from './logo.svg';

import styles from './logo.scss';

const Logo = (props) => {
    const {
        size,
    } = props;

    const className = classnames(
        styles['logo'],
        styles[size],
    );

    return (
        <LogoIcon className={ className } />
    );
};

Logo.propTypes = {
    size: PropTypes.oneOf(['small', 'medium']),
};

Logo.defaultProps = {
    size: 'medium',
};

export default Logo;
