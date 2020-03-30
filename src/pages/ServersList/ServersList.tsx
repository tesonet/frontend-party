import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {IReduxState} from '../../store';
import {fetchServers} from '../../store/actions/serversActions';
import {Table} from '../../components/organisms/Table/Table';
import {compareByDistanceAndName, mapTableRows} from './utils';
import {serversListColumns} from './columnsConfig';

export function ServersList() {
	const dispatch = useDispatch();
	const servers = useSelector(({servers}: IReduxState) => (
		servers
			.sort(compareByDistanceAndName)
			.map(mapTableRows)
	));

	useEffect(() => {
		dispatch(fetchServers());
	}, [dispatch]);

	return (
		<Table
			columns={serversListColumns}
			data={servers}
		/>
	);
}