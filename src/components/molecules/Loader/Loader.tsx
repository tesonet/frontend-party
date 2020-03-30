import React from 'react';
import styles from './Loader.module.scss';

export interface ILoaderProps {
	isLoading: boolean;
}

export function Loader(props: ILoaderProps) {
	if (props.isLoading) {
		return (
			<div className={styles['loader']}>
				<div className={styles['loader__overlay']} />
				<div className={styles['loader__ring']} />
			</div>
		);
	}
	return null;
}