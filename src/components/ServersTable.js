import React, { useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoTestio } from '../assets/images/logo-testio-small.svg';
import { ReactComponent as DoorsIcon } from '../assets/images/doors-icon.svg';

function ServersTable({ serverList, setServerList, userLogOut }) {
	const [sorted, setSorted] = useState(false);

	//ONE FUNCTION TO SORT SERVERS BY NAME AND DISTANCE
	const sortServers = (key) => {
		let sortedData = serverList[key];
		if (!sorted) {
			sortedData = serverList.sort((a, b) =>
				key === 'name' ? a.name.localeCompare(b.name) : a[key] - b[key]
			);
		} else {
			sortedData = serverList.sort((a, b) =>
				key === 'name' ? b.name.localeCompare(a.name) : b[key] - a[key]
			);
		}
		setSorted(!sorted);
		setServerList(sortedData);
	};

	return (
		<div className="servers">
			<header className="servers__header">
				<LogoTestio />
				<Link to="/" onClick={() => userLogOut()} className="servers__logOut">
					<DoorsIcon />
					<p>Logout</p>
				</Link>
			</header>
			<table className="table">
				<thead>
					<tr className="table__header">
						<th onClick={() => sortServers('name')}>Server</th>
						<th onClick={() => sortServers('distance')}>Distance</th>
					</tr>
				</thead>
				<Scrollbars style={{ height: 'calc(100vh - 180px)' }}>
					<tbody>
						{serverList.map((server, id) => (
							<tr key={id} className="table__row">
								<td key={server.name}>{server.name}</td>
								<td key={server.distance}>{server.distance} km</td>
							</tr>
						))}
					</tbody>
				</Scrollbars>
			</table>
		</div>
	);
}

export default ServersTable;
