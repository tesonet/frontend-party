import React from 'react';
import styles from './Input.module.scss';

interface IInputProps {
	type: string;
	name?: string;
	startAdornment?: React.ReactNode;
	placeholder?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input(props: IInputProps) {
	return (
		<div className={styles['input-wrapper']}>
			{
				props.startAdornment &&
                <span className={[
					styles['input__adornment'],
					styles['input__adornment--start']
				].filter(Boolean).join(' ')}>
					{props.startAdornment}
				</span>
			}
			<input
				name={props.name || ''}
				type={props.type || 'text'}
				className={styles['input']}
				placeholder={props.placeholder || ''}
				onChange={props.onChange}
			/>
		</div>
	);
}