import React from 'react';
import { oneOf, string } from 'prop-types';
import styles from './loader.less';


const LoaderView = ({ size, className, style, ...props }) => (
    <span className={styles[size]} style={style} {...props} />
);

LoaderView.propTypes = {
    size: oneOf(['small', 'medium', 'large']),
    style: string,
    className: string
};

LoaderView.defaultProps = {
    size: 'small',
    className: ''
};

export default LoaderView;
