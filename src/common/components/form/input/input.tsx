import React from 'react';
import styles from './Input.module.scss';

interface IProps {
    value?: string;
    type: string;
    name: string;
    shouldEmphasize?: boolean;
    children?: React.ReactElement;
    placeholder?: string;
    onChange?: (e: any) => void;
}

export const Input: React.FC<IProps> = (props: IProps) => {
    return (
        <div>
            <input
                className={styles.input}
                type={props.type}
                name={props.name}
                value={props.value}
                data-emphasized={props.shouldEmphasize}
                onChange={props.onChange}
                placeholder={props.placeholder}
            />
            {props.children}
        </div>

    )
}
