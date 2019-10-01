import React from 'react';
import styles from './Loader.module.scss';

interface IProps {
    className?: string;
}

export const Loader: React.SFC<any> = (props: IProps) => {
    return (
        <div
            className={`${styles.loader} ${props.className ? props.className : ''}`}
        />
    );
};
