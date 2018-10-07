import React from "react";

export const LoginButton = ({ handleClick, label }) => (
	<button onClick={handleClick}>{label}</button>
);