import React from 'react';
import {TextButton} from '../../atoms/TextButton/TextButton';
import {useDispatch} from 'react-redux';
import {logoutUser} from '../../../store/actions/userActions';
import {ReactComponent as LogoutIcon} from '../../../assets/logout.svg';
import {ReactComponent as LogoDark} from '../../../assets/logo-dark.svg';
import styles from './Header.module.scss';

export function Header() {
	const dispatch = useDispatch();

	return (
		<nav className={styles['header']}>
			<LogoDark/>
			<menu className={styles['header__menu']}>
				<TextButton
					text='Logout'
					startAdornment={<LogoutIcon/>}
					onClick={() => dispatch(logoutUser())}
					buttonStyles={styles['header__logout']}
				/>
			</menu>
		</nav>
	);
}