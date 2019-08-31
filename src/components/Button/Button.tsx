import React from "react";
import './Button.scss';

const Button: React.FC<{
    title: string,
    buttonStyle?: 'default' | 'success' | 'danger',
    extraClasses?: string,
    type?: 'button' | 'submit',
    isLoading?: boolean
}> = (props) => {
    const {buttonStyle, extraClasses, type, isLoading, title} = props;
    return (
        <button className={`button button--${buttonStyle} ${extraClasses}`}
                type={type}
                disabled={isLoading}
        >
            {isLoading ?
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                : title
            }
        </button>
    );
};

Button.defaultProps = {
    type: 'button',
    buttonStyle: 'default'
};

export default Button;