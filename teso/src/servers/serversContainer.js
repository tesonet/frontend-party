import React, { PureComponent } from 'react';
import { getServersAsync } from '../apiClient/apiClient';
import { Redirect } from 'react-router-dom';
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import "./serversContainer.css";
import { orderBy } from 'lodash';
import { withAlert } from 'react-alert';

class Servers extends PureComponent {
    state = {
        servers: null,
        shouldRedirectToLogin: false
    }

    async componentDidMount() {
        try {
            const response = await getServersAsync();
            this.setState(() => ({
                servers: orderBy(response, ['distance', 'name'])
            }));
        } catch (error) {
            if (error.message === 'Unauthorized') {
                this.setState(() => ({
                    shouldRedirectToLogin: true
                }));
            };

            this.props.alert.error(error.message);
        }
    }


    render() {
        if (this.state.shouldRedirectToLogin) {
            return <Redirect to='/login' />
        }

        return (
            <div className="py-3 px-3 h-full w-full">
                {this.state.servers && <Table className="servers__table">
                    <Thead>
                        <Tr>
                            <Th className="servers__table__header text-left pl-4 text-sm font-thin">Server</Th>
                            <Th className="servers__table__header text-right pr-4 text-sm font-thin">Distance</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {this.state.servers.map((server, i) => {
                            return <Tr className="servers__table__row" key={i}>
                                <Td className="text-left pl-4 text-sm font-thin">{server.name}</Td>
                                <Td className="text-left text-right pr-4 text-sm font-thin">{server.distance} km</Td>
                            </Tr>
                        })}
                    </Tbody>
                </Table>}
            </div>
        )
    }
}

export default withAlert()(Servers);