import React from 'react';
import { Alert, Table } from 'reactstrap';

import api from './api';

class ServersPage extends React.Component {
    static renderContent(servers = []) {
        if (servers.length > 0) {
            return servers.map(({ name, distance }) => (
                <tr key={ `${name}-${distance}` }>
                    <td>{ name }</td>
                    <td>{ distance }</td>
                </tr>
            ));
        }

        return (
            <tr>
                <th scope="row">There is not servers</th>
            </tr>
        );
    }

    static sortServers(a, b) {
        if (a.name < b.name) {
            return -1;
        }

        if (a.name > b.name) {
            return 1;
        }

        return a.distance - b.distance;
    }

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            servers: [],
            error: null,
        };
    }

    componentDidMount() {
        api.getServers()
            .then((servers) => {
                this.setState({
                    loading: false,
                    servers: servers.sort(ServersPage.sortServers),
                    error: null,
                });
            })
            .catch((error) => {
                // TODO parse error message
                this.setState({
                    loading: false,
                    error: 'Something went wrong',
                });
            });
    }

    render() {
        const {
            loading,
            error,
            servers,
        } = this.state;

        return (
            <div>
                { error && <Alert color="danger">{ error }</Alert>}

                <Table hover responsive>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Distance</th>
                        </tr>
                    </thead>
                    <tbody>
                        { ServersPage.renderContent(servers) }
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default ServersPage;
