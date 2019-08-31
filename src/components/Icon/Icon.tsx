import React from "react";

const Icons = require("../../assets/sprite.svg") as string;

const Icon: React.FC<({
    name: string,
    color?: string,
    width?: number,
    height?: number
})> = (props) => (
    <svg className={`icon icon--${props.name}`}
         fill={props.color}
         width={props.width}
         height={props.height}
    >
        <use xlinkHref={`${Icons}#icon-${props.name}`}/>
    </svg>
);

export default Icon;
