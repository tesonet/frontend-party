import React from 'react';
import styles from './Button.module.scss';

interface IButtonProps {
	text?: string;
	type?: 'button' | 'submit' | 'reset' | undefined;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Button(props: IButtonProps) {
	return (
		<button
			className={styles.button}
			type={props.type || 'button'}
			onClick={props.onClick}
		>
			{props?.text || ''}
		</button>
	);
}