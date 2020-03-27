import React, {FormEvent} from 'react';
import {login, logout} from './store/actions/userActions';
import {useDispatch} from 'react-redux';

function App() {
	const dispatch = useDispatch();

	const submitForm = async (e: FormEvent) => {
		e.preventDefault();
		const formData = new FormData(e.target as HTMLFormElement);
		const username = formData.get('username') as string;
		const password = formData.get('password') as string;
		await dispatch(login({username, password}));
	};

	return (
		<div>
			<form onSubmit={submitForm}>
				<input name='username' type='text'/>
				<input name='password' type='password'/>
				<button type='submit'>Submit</button>
			</form>
			<button onClick={() => dispatch(logout())}>Logout</button>
		</div>
	);
}

export default App;
