// @flow

import * as React from 'react';
import axios from 'axios/index';
import styled from 'styled-components';
import * as R from 'ramda';

import { API_URL } from '../../constants/constants';

const ServerItem = styled.div`
  display: flex;
  justify-content: space-between;
  height: ${props => props.theme.height.regular};
  line-height: ${props => props.theme.height.regular};
  border-top: 1px solid ${props => props.theme.colour.lightestGrey};
  span {
    color: ${props => props.theme.colour.grey};
    padding: 0 20px;
  }
`;

type ServersState = {
  servers: any[],
};

export class Servers extends React.Component<{}, ServersState> {
  state = {
    servers: [],
  };

  componentDidMount() {
    const token = localStorage.getItem('token');
    axios
      .get(`${API_URL}/servers`, {
        headers: {
          Authorization: token,
        },
      })
      .then(response =>
        this.setState({
          servers: response.data,
        }),
      );
  }

  sortServers = () => {
    const { servers } = this.state;
    const serversModified =
      servers.length &&
      servers.map(server => {
        const serverNameSplit = server.name.split('#');

        return {
          name: serverNameSplit[0],
          number: `#${serverNameSplit[1]}`,
          distance: server.distance,
        };
      });
    const sort = R.sortWith([R.ascend(R.prop('name')), R.ascend(R.prop('distance'))]);

    return sort(serversModified);
  };

  render() {
    return (
      <div>
        {this.sortServers().map(server => (
          <ServerItem key={server.name.concat(server.number, server.distance)}>
            <span>
              {server.name} {server.number}
            </span>
            <span>{server.distance} km</span>
          </ServerItem>
        ))}
      </div>
    );
  }
}
