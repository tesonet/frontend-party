import React from 'react';
import styles from './TextButton.module.scss';

export interface ITextButtonProps {
	text: string;
	startAdornment?: React.ReactNode;
	endAdornment?: React.ReactNode;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	buttonStyles?: string;
}

export function TextButton(props: ITextButtonProps) {
	return (
		<button
			type="button"
			className={[
				styles['text-button'],
				props.buttonStyles
			].filter(Boolean).join(' ')}
			onClick={e => props.onClick && props.onClick(e)}
		>
			{
				(props.startAdornment || props.endAdornment) &&
                <span
					data-qa='textButtonAdornment'
                    className={[
						styles['text-button__adornment'],
						props.startAdornment && styles['text-button__adornment--start'],
						props.endAdornment && styles['text-button__adornment--end'],
					].filter(Boolean).join(' ')}
                >
					{props.startAdornment || props.endAdornment}
				</span>
			}
			<span
				data-qa='textButtonText'
				className={styles['text-button__text']}
			>
				{props.text}
			</span>
		</button>
	);
}