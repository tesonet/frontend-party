import React, { Component } from 'react';
import ServerList from './ServerList';
import Redirect from 'react-router-dom';

class Cms extends Component {
    render() {
        let token = localStorage.getItem('token');

        if (token) {
            switch (this.props.match.params.module) {
                case 'server-list':
                    return <ServerList />
                    break;
                default:
                    return <div>Page does not exist</div>;
            }
        } else {
            return <div>Unauthorized access</div>;
        }
    }
}

export default Cms;