import {login} from '../../store/actions/userActions';
import React, {FormEvent} from 'react';
import {useDispatch} from 'react-redux';

export function Login() {
	const dispatch = useDispatch();

	const submitForm = async (e: FormEvent) => {
		e.preventDefault();
		const formData = new FormData(e.target as HTMLFormElement);
		const username = formData.get('username') as string;
		const password = formData.get('password') as string;
		dispatch(login({username, password}));
	};

	return (
		<div>
			<form onSubmit={submitForm}>
				<input name='username' type='text'/>
				<input name='password' type='password'/>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
}
