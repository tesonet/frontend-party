import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userAuthentication } from '../actions/actions';
import logoTestio from '../assets/images/logo-testio-big.png';
import Button from '../components/Button';

function Login(props) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [usernameValid, setUsernameValid] = useState(false);
	const [passwordValid, setPasswordValid] = useState(false);

	const dispatch = useDispatch();
	const wrongCredentials = useSelector(
		(state) => state.userAuthentication.wrongCredentials
	);
	const loginPending = useSelector(
		(state) => state.userAuthentication.isPending
	);
	const isLoggedIn = useSelector(
		(state) => state.userAuthentication.isLoggedIn
	);

	isLoggedIn && props.history.push('/servers');

	const loginSubmit = async () => {
		const loginOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username: username, password: password }),
		};

		username && password
			? dispatch(userAuthentication(loginOptions))
			: !username && setUsernameValid(true);
		!password && setPasswordValid(true);
	};

	const onChangeUsername = (e) => {
		setUsernameValid(false);
		setUsername(e.target.value);
	};
	const onChangePassword = (e) => {
		setPasswordValid(false);
		setPassword(e.target.value);
	};

	return (
		<div className="login">
			<img src={logoTestio} alt="testio logo" className="login__logo" />
			{wrongCredentials && (
				<div className="login__wrongCredentials">
					Incorrect username or password
				</div>
			)}
			<form
				method="post"
				className="form"
				onSubmit={(e) => {
					e.preventDefault();
					loginSubmit();
				}}
			>
				<div className="form__group">
					<input
						className="form__input form__input--username"
						type="text"
						id="username"
						name="username"
						placeholder="Username"
						value={username}
						onChange={(e) => onChangeUsername(e)}
					/>
					{usernameValid && (
						<div className="form__input--error">
							<p>Please enter your username</p>
						</div>
					)}
				</div>
				<div className="form__group">
					<input
						className="form__input form__input--password"
						type="password"
						id="password"
						name="password"
						placeholder="Password"
						value={password}
						onChange={(e) => onChangePassword(e)}
					/>
					{passwordValid && (
						<div className="form__input--error">
							<p>Please enter your password</p>
						</div>
					)}
				</div>
				<Button
					type={'submit'}
					className={'btn btn--green'}
					text={
						loginPending ? (
							<div className="form__loader">Loading...</div>
						) : (
							'Log In'
						)
					}
				/>
			</form>
		</div>
	);
}

export default Login;
