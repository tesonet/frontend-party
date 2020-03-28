import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {IReduxState} from '../../store';
import {fetchServers} from '../../store/actions/serversActions';
import {logoutUser} from '../../store/actions/userActions';

export function ServersList() {
	const dispatch = useDispatch();
	const servers = useSelector((state: IReduxState) => state.servers);

	useEffect(() => {
		dispatch(fetchServers());
	}, [dispatch]);

	return (
		<React.Fragment>
			{
				servers.map((server, idx) => (
					<div key={idx}>{server?.name}</div>
				))
			}
			<button onClick={() => dispatch(logoutUser())}>
				Logout
			</button>
		</React.Fragment>
	);
}