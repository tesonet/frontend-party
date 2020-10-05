import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userAuthentication, fetchData } from '../actions/actions';
import SplashScreen from '../components/SplashScreen';
import ServersTable from '../components/ServersTable';

function ServerList() {
	const [serverList, setServerList] = useState();

	const storedToken = localStorage.getItem('token');

	const dispatch = useDispatch();
	const { servers, fetchDataError } = useSelector((state) => state.fetchData);

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
			{!serverList || serverList.length < 2 ? (
				<SplashScreen fetchDataError={fetchDataError} />
			) : (
				<ServersTable
					serverList={serverList}
					setServerList={setServerList}
					userLogOut={userLogOut}
					fetchDataError={fetchDataError}
				/>
			)}
		</>
	);
}

export default ServerList;
