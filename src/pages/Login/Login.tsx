import {loginUser} from '../../store/actions/userActions';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RouteComponentProps} from '@reach/router';
import {Button} from '../../components/atoms/Button/Button';
import {Input} from '../../components/atoms/Input/Input';
import styles from './Login.module.scss';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import {ReactComponent as UserIcon} from '../../assets/user.svg';
import {ReactComponent as LockIcon} from '../../assets/lock.svg';
import {IReduxState} from '../../store';
import {ENTER_KEY_CODE} from '../../utils/constants';

export function Login(props: RouteComponentProps) {
	const dispatch = useDispatch();
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();
	const errors = useSelector((state: IReduxState) => state.errors);

	return (
		<div className={styles['login']}>
			<div className={styles['login__container']}>
				<Logo className={styles['login__logo']}/>
				<div
					className={styles['login__form']}
					onKeyPress={event => {
						if (event.charCode === ENTER_KEY_CODE) {
							dispatch(loginUser({username, password}));
						}
					}}
				>
					<Input
						data-qa='usernameInput'
						type='text'
						placeholder='Username'
						startAdornment={<UserIcon/>}
						onChange={e => setUsername(e.target.value)}
					/>
					<Input
						data-qa='passwordInput'
						type='password'
						placeholder='Password'
						startAdornment={<LockIcon/>}
						onChange={e => setPassword(e.target.value)}
					/>
					<Button
						data-qa='loginSubmitButton'
						text='Log in'
						onClick={() => dispatch(loginUser({username, password}))}
					/>
				</div>
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
