import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userAuthentication } from '../actions/actions';
import logoTestio from '../assets/images/logo-testio-big.png';
import Button from '../components/Button';

function Login(props) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [isUsernameBlank, setIsUsernameBlank] = useState(false);
	const [isPasswordBlank, setIsPasswordBlank] = useState(false);

	const dispatch = useDispatch();
	// RECEIVING ALL THE DATA ABOU USER STATUS FROM REDUX
	const {
		wrongCredentials,
		loginPending,
		isLoggedIn,
		loginError,
	} = useSelector((state) => state.userAuthentication);

	// CHEKING USER STATUS IN REDUX, REDIRECTING TO SERVER LIST IF LOG IN IS SUCCESSFUL
	isLoggedIn && props.history.push('/servers');

	const loginSubmit = async () => {
		const loginOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username: username, password: password }),
		};

		// IF USERNAME AND PASSWORD IS ENTERED SENDING API CALL TO SERVER FROM REDUX
		username && password
			? dispatch(userAuthentication(loginOptions))
			: // IF USER HAVEN'T ENTERED USERNAME OR PASSWORD SHOWING WARN MESSAGE
			  !username && setIsUsernameBlank(true);
		!password && setIsPasswordBlank(true);
	};

	const onChangeUsername = (e) => {
		setIsUsernameBlank(false);
		setUsername(e.target.value);
	};
	const onChangePassword = (e) => {
		setIsPasswordBlank(false);
		setPassword(e.target.value);
	};

	return (
		<div className="login" data-test="login">
			<img src={logoTestio} alt="testio logo" className="login__logo" />
			{wrongCredentials && (
				<div className="login__error">Incorrect username or password</div>
			)}
			{loginError && (
				<div className="login__error">
					Sorry, something happened on our end. Please try again later.
				</div>
			)}
			<form
				method="post"
				className="form"
				data-test="form"
				onSubmit={(e) => {
					e.preventDefault();
					loginSubmit();
				}}
			>
				<label className="form__group">
					<input
						className="form__input form__input--username"
						type="text"
						id="username"
						name="username"
						placeholder="Username"
						value={username}
						onChange={(e) => onChangeUsername(e)}
					/>
					{isUsernameBlank && (
						<div className="form__input--error">
							<p>Please enter your username</p>
						</div>
					)}
				</label>
				<label className="form__group">
					<input
						className="form__input form__input--password"
						type="password"
						id="password"
						name="password"
						placeholder="Password"
						value={password}
						onChange={(e) => onChangePassword(e)}
					/>
					{isPasswordBlank && (
						<div className="form__input--error">
							<p>Please enter your password</p>
						</div>
					)}
				</label>
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
