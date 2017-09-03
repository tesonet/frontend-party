import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';

import api from '~/api';
import i18n from '~/i18n';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Header = styled.div`
  padding: 18px 15px;
  color: ${props => props.theme.color.tableHeaderText};
  background: ${props => props.theme.color.tableHeaderBG};
  border-top: 1px solid ${props => props.theme.color.tableBorder};
  border-bottom: 1px solid ${props => props.theme.color.tableBorder};
  letter-spacing: 1px;
`;

const Server = styled.div`
  padding: 18px 15px;
  border-bottom: 1px solid ${props => props.theme.color.tableBorder};
`;


class Servers extends React.Component {
  state = {servers: []}

  componentDidMount() {
    api.getServers().then(data => this.setState({servers: _.sortBy(data, ['distance', 'name'])}));
  }

  render() {
    const {servers} = this.state;
    return (
      <Container>
        <Header className='clearfix'>
          <span>
            {i18n.t('servers.name')}
          </span>
          <span className='pull-right'>
            {i18n.t('servers.distance')}
          </span>
        </Header>
        {servers.map(server => (
          <Server key={server.name + server.distance} className='clearfix'>
            <span>
              {server.name}
            </span>
            <span className='pull-right'>
              {server.distance}
            </span>
          </Server>
        ))}
      </Container>
    );
  }
}

export default Servers;
