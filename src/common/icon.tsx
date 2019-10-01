import React from 'react';
import SVG from 'react-inlinesvg';

interface IProps {
	path: string;
	height?: number;
	width?: number;
	className?: string;
}

export const SvgImage = (props: IProps) => {
	return (
		<SVG
			{...props}
			src={props.path}
			height={props.height || 16}
			width={props.width || 16}
		/>
	);
};
