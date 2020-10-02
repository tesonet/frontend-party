import React from 'react';

const InputBox = (props) => {
	return (
		<form className="inputBox">
			{props.children}
			<input
				className="inputBox__input"
				type={props.type}
				id={props.id}
				name={props.name}
				placeholder={props.placeholder}
				src={props.src}
				required
			/>
		</form>
	);
};

export default InputBox;
