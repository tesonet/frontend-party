import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {IReduxState} from '../../store';
import {fetchServers} from '../../store/actions/serversActions';
import {Table} from '../../components/organisms/Table/Table';
import {compareByDistanceAndName, mapTableRows} from './utils';
import styles from './ServerList.module.scss';

const columns = [
	{
		key: 'serverName',
		title: 'Server',
		dataIndex: 'name',
	},
	{
		key: 'serverDistance',
		title: 'Distance',
		dataIndex: 'distance',
	}
];

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
			columns={columns}
			data={servers}
			tableStyles={styles['servers-list']}
		/>
	);
}