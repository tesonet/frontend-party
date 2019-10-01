import React from 'react';
import styles from './Button.module.scss';

interface IProps {
    children?: string;
    type?: any;
    disabled?: boolean;
    onClick?: (e: any) => void;
    className?: string;
}

export const Button = (props: IProps) => {
    return (
        <button
            type={props.type}
            className={`${styles.button} ${props.className || ''}`}
            disabled={props.disabled}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};
