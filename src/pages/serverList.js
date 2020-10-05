import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userAuthentication, fetchData } from '../actions/actions';
import SplashScreen from '../components/SplashScreen';
import ServersTable from '../components/ServersTable';

function ServerList() {
	const [serverList, setServerList] = useState();

	const storedToken = localStorage.getItem('token');

	const dispatch = useDispatch();
	const servers = useSelector((state) => state.fetchData.servers);

	const userLogOut = () => {
		localStorage.clear();
		dispatch(userAuthentication());
	};

	const requestDataOptions = {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${storedToken}`,
		},
	};

	useEffect(() => {
		setServerList(servers);
	}, [servers]);

	useEffect(() => {
		dispatch(fetchData(requestDataOptions));
	}, []);

	return (
		<>
			{serverList === undefined || serverList.length < 2 ? (
				<SplashScreen />
			) : (
				<ServersTable
					serverList={serverList}
					setServerList={setServerList}
					userLogOut={userLogOut}
				/>
			)}
		</>
	);
}

export default ServerList;
