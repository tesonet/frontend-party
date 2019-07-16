/* eslint-disable react/button-has-type */
import React from 'react';
import { oneOf, bool, node, string } from 'prop-types';
import classnames from 'classnames';
import Loader from './loader';
import Icon from './icons';

import styles from './buttons.less';

const Button = ({ type, size, buttonType, iconBefore, iconName, loading, children, className, ...props }) => (
    <button
        className={classnames(
            styles[type],
            styles[`size-${size}`],
            className
        )}
        type={buttonType}
        {...props}
    >
        {loading && <Loader size="small" color="white" />}
        {iconBefore && !loading && <Icon style={{ marginRight: '6px', transform: 'scaleX(-1)' }} name={iconName} />}
        {loading ? <span className={styles.loading}>{children}</span> : <span>{children}</span>}
    </button>
);

Button.propTypes = {
    type: oneOf(['default', 'transparent']),
    buttonType: oneOf(['button', 'submit']),
    className: string,
    iconBefore: bool,
    iconName: string,
    size: oneOf(['small', 'normal']),
    children: node,
    loading: bool
};

Button.defaultProps = {
    type: 'default',
    buttonType: 'button',
    size: 'normal'
};

export default Button;
