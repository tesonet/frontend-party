import React from 'react';

interface IProps {
    value?: string;
    type: string;
    name: string;
    isValid?: boolean;
    children?: React.ReactElement;
}

const Input: React.FC<IProps> = (props: IProps) => {
    return (
        <input
            type={props.type}
            name={props.name}
            value={props.value || ''}
            data-emphasized={props.isValid}
        >
            {props.children}
        </input>
    )
}
