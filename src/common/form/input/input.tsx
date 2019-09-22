import React from 'react';

interface IProps {
    value?: string;
    type: string;
    name: string;
    isValid?: boolean;
    children?: React.ReactElement;
    placeholder?: string;
    onChange?: (e: any) => void;
}

const Input: React.FC<IProps> = (props: IProps) => {
    return (
        <div>
            <input
                type={props.type}
                name={props.name}
                value={props.value}
                data-emphasized={props.isValid}
                onChange={props.onChange}
                placeholder={props.placeholder}
            />
            {props.children}
        </div>

    )
}

export default Input;
