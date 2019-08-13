import React from "react";
import "./button.scss";

interface ButtonInterface {
    text: string;
    onClick: () => void;
}

const Button = (props: ButtonInterface) => {
    return (
        <button className="button" onClick={props.onClick}>
            {props.text}
        </button>
    );
};

export default Button;
