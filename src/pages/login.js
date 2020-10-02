import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import logoTestio from '../assets/images/logo-testio.png';
import Button from '../components/Button';
// import OutsideAlerter from '../components/clickOutsideHook';

function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [usernameValid, setUsernameValid] = useState(false);
	const [passwordValid, setPasswordValid] = useState(false);

	const storedToken = localStorage.getItem('token');
	const [token, setToken] = useState(storedToken || null);

	const [retrievedData, setRetrievedData] = useState();

	const dispatch = useDispatch();
	const displayLanguage = useSelector((state) => state);

	// const token = 'f9731b590611a5a9377fbd02f247fcdf';
	const apiUrl = 'https://playground.tesonet.lt/v1';

	const loginSubmit = () => {
		const loginOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username: username, password: password }),
		};

		console.log('Ran');
		username && password
			? storedToken !== undefined
				? fetch(`${apiUrl}/tokens`, loginOptions)
						.then((response) => response.json())
						.then((data) => localStorage.setItem('token', data.token))
						.then(() => getData())
				: getData()
			: !username && setUsernameValid(true);
		!password && setPasswordValid(true);
	};
	// console.log('storedToken', storedToken);

	const getData = () => {
		const requestDataOptions = {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};
		fetch(`${apiUrl}/servers`, requestDataOptions)
			.then((response) => response.json())
			.then((data) => console.log(data))
			.then((data) => setRetrievedData(data));
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
			<form
				method="post"
				// className="login__form"
				onSubmit={(e) => {
					e.preventDefault();
					loginSubmit();
				}}
			>
				<div className="login__form-group">
					<input
						className="login__input login__input-username"
						type="text"
						id="username"
						name="username"
						placeholder="Username"
						value={username}
						onChange={(e) => onChangeUsername(e)}
					/>
					{usernameValid && (
						<div className="login__input-username-error">
							<p>Please enter your username</p>
						</div>
					)}
				</div>
				<div className="login__form-group">
					<input
						className="login__input login__input-password"
						type="password"
						id="password"
						name="password"
						placeholder="Password"
						value={password}
						onChange={(e) => onChangePassword(e)}
					/>
					{passwordValid && (
						<div className="login__input-password-error">
							<p>Please enter your password</p>
						</div>
					)}
				</div>
				<Button type={'submit'} className={'btn btn--green'} text={'Log In'} />
			</form>
		</div>
	);
}

export default Login;

// {
// 	/* <OutsideAlerter setUsernameValidity={setusernameValid}> */
// }
// {
// 	/* </OutsideAlerter> */
// }
// {
// 	/* <OutsideAlerter> */
// }
// {
// 	/* </OutsideAlerter> */
// }
//  <Button
//     type={'submit'}
//     onClick={() => getData()}
//     className={'btn btn--green'}
//     text={'Get data'}
// />
// const getData = () => {
// 	const requestOptions = {
// 		method: 'POST',
// 		headers: { authorization: token, 'Content-Type': 'application/json' },
// 		// body: JSON.stringify({ username: 'tesonet', password: 'partyanimal' }),
// 	};
// 	fetch(serverUrl, requestOptions)
// 		.then((response) => response.json())
// 		.then((data) => console.log(data));
// };

// axios.interceptors.request.use(
// 	(config) => {
// 		const { origin } = new URL(config.url);
// 		const allowedOrigins = [serverUrl];
// 		// const token = localStorage.getItem('token');
// 		if (allowedOrigins.includes(origin)) {
// 			config.headers.authorization = `Bearer ${token}`;
// 			// config.headers.Content-Type = `Bearer ${token}`;
// 		}
// 		console.log(config);
// 		return config;
// 	},
// 	(error) => {
// 		console.log('error', error);
// 		return Promise.reject(error);
// 	}
// );

// const getData = async () => {
// 	try {
// 		const { data } = await axios.get(`${serverUrl}/servers`);
// 		console.log(data);
// 		//   setFoods(data);
// 		// setFetchError(null);
// 	} catch (err) {
// 		console.log(err);
// 		// setFetchError(err.message);
// 	}
// };
// axios
// 	.post(url, data, {
// 		headers: {
// 			authorization: token,
// 			Accept: 'application/json',
// 			'Content-Type': 'application/json',
// 		},
// 	})
// 	.then((response) => {
// 		console.log(response);
// 		// return  response;
// 	})
// 	.catch((error) => {
// 		//return  error;
// 	});
