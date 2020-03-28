import {loginUser} from '../../store/actions/userActions';
import React, {FormEvent} from 'react';
import {useDispatch} from 'react-redux';
import {RouteComponentProps} from '@reach/router';

export function Login(props: RouteComponentProps) {
	const dispatch = useDispatch();

	const submitForm = async (e: FormEvent) => {
		e.preventDefault();
		const formData = new FormData(e.target as HTMLFormElement);
		const username = formData.get('username') as string;
		const password = formData.get('password') as string;
		dispatch(loginUser({username, password}));
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
