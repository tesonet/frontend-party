import React from 'react';

interface ILoaderProps {
	isLoading: boolean;
}

export function Loader(props: ILoaderProps) {
	if (props.isLoading) {
		return (
			<div>
				Loading...
			</div>
		);
	}
	return null;
}