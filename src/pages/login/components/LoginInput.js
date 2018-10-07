import React from "react";

export const LoginInput = ({
	handleChange,
	value,
	name,
	type,
	placeholder
}) => (
	<div className={`input-container-${name}`}>
		<input
			onChange={handleChange}
			value={value}
			name={name}
			type={type}
			placeholder={placeholder}
		/>
	</div>
);