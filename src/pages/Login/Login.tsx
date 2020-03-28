import {loginUser} from '../../store/actions/userActions';
import React, {FormEvent} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RouteComponentProps} from '@reach/router';
import {Button} from '../../components/atoms/Button/Button';
import {Input} from '../../components/atoms/Input/Input';
import styles from './Login.module.scss';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import {ReactComponent as UserIcon} from '../../assets/user.svg';
import {ReactComponent as LockIcon} from '../../assets/lock.svg';
import {IReduxState} from '../../store';

export function Login(props: RouteComponentProps) {
	const dispatch = useDispatch();
	const errors = useSelector((state: IReduxState) => state.errors);

	const submitForm = async (e: FormEvent) => {
		e.preventDefault();
		const formData = new FormData(e.target as HTMLFormElement);
		const username = formData.get('username') as string;
		const password = formData.get('password') as string;
		dispatch(loginUser({username, password}));
	};

	return (
		<div className={styles['login']}>
			<div className={styles['login__container']}>
				<Logo className={styles['login__logo']}/>
				<form
					className={styles['login__form']}
					onSubmit={submitForm}
				>
					<Input
						type='text'
						name='username'
						placeholder='Username'
						startAdornment={<UserIcon/>}
					/>
					<Input
						type='password'
						name='password'
						placeholder='Password'
						startAdornment={<LockIcon/>}
					/>
					<Button text='Log in' type='submit'/>
				</form>
				{
					errors.isLoginError &&
					<span className={styles['login__error']}>
						Username or password is incorrect.
					</span>
				}
			</div>
		</div>
	);
}
