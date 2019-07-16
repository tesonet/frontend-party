import React from 'react';
import classnames from 'classnames';
import { bool, element, func, node, number, object, oneOf, oneOfType, string } from 'prop-types';
import styles from './input.less';


const Input = ({ id, size, align, icon, iconPosition, invalid, className, style, children, ...props }) => (
    <label
        htmlFor={id}
        className={classnames(
            styles.base,
            styles[size],
            invalid ? styles.invalid : '',
            className
        )}
        style={style}
    >
        {iconPosition === 'start' && icon}
        <input
            {...props}
            id={id}
            className={classnames(
                styles.control,
                styles[`align-${align}`]
            )}
        />
        <span
            className={styles.border}
        />
        {iconPosition === 'end' && icon}
        {children}
    </label>
);

Input.propTypes = {
    id: string,
    value: oneOfType([string, number]),
    size: oneOf(['medium']),
    align: oneOf(['left', 'center', 'right']),
    invalid: bool,
    icon: element,
    iconPosition: oneOf(['start', 'end']),
    onChange: func,
    className: string,
    style: object,
    children: node
};

Input.defaultProps = {
    align: 'left',
    size: 'medium',
    className: '',
    style: {}
};

export default Input;
