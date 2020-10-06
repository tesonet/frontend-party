import React from 'react';

const Button = (props) => {
	return (
		<button
			className={props.className}
			onClick={props.onClick}
			type={props.type}
			style={props.style}
		>
			{props.text}
		</button>
	);
};

export default Button;
