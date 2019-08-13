import React from "react";
import "./inputField.scss";

interface InputFieldInterface {
    type: string;
    name: string;
    onChange: (e: any) => void;
    placeholder?: string;
    icon?: any;
    className?: string;
}

const InputField = ({ type, name, placeholder, className, icon, onChange }: InputFieldInterface) => (
    <div className="input-field">
        <input
            className={`input-field_input ${className}`}
            type={type}
            name={name}
            placeholder={placeholder}
            style={{ background: `#ffffff url(${icon}) no-repeat 25px`}}
            onChange={onChange}
        />
    </div>
);

export default InputField;
