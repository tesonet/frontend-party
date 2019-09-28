import React from 'react';
import styles from './Loader.module.scss';

interface IProps {
    className?: string;
}

const Loader: React.SFC<any> = (props: IProps) => {
    return (
        <div
            className={`${styles.loader} ${props.className ? props.className : ''}`}
        />
    );
};

export default Loader;
