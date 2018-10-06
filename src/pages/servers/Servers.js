import React, { Component } from 'react';
import ServersList from './containers/ServersList';
import './Servers.scss';

class Servers extends Component {
    render() {
        return (
            <div className="servers-page">
	      		<ServersList />
	      	</div>
        );
    }
}

export default Servers;