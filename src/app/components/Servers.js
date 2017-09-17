import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _ from 'lodash';
import {Scrollbars} from 'react-custom-scrollbars';

import api from '~/api';
import i18n from '~/i18n';
import resources from '~/resources';

import {Loading} from './';


const RESOURCE_NAME = 'servers';


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

const NoData = styled.div`
  padding: 30px;
`;

const ServersWrapper = styled.div`
  height: 100%;
  position: relative;

  > * {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow-y: auto;
  }
`;

const Server = styled.div`
  padding: 18px 15px;
  border-bottom: 1px solid ${props => props.theme.color.tableBorder};
`;


export const Servers = ({isLoading, hasLoaded, data}) => (
  <Container>
    <Header className='clearfix'>
      <span>
        {i18n.t('servers.name')}
      </span>
      <span className='pull-right'>
        {i18n.t('servers.distance')}
      </span>
    </Header>
    {isLoading &&
      <Loading />
    }
    {hasLoaded && (data == null || data.length === 0) &&
      <NoData>
        {i18n.t('servers.noData')}
      </NoData>
    }
    {!(data == null || data.length === 0) &&
      <ServersWrapper>
        <Scrollbars>
          {_.sortBy(data, ['distance', 'name']).map(server => (
            <Server key={server.name + server.distance} className='clearfix'>
              <span>
                {server.name}
              </span>
              <span className='pull-right'>
                {server.distance}
              </span>
            </Server>
          ))}
        </Scrollbars>
      </ServersWrapper>
    }
  </Container>
);

Servers.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  hasLoaded: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    distance: PropTypes.number.isRequired,
  })),
};

Servers.defaultProps = {
  data: null,
};


const enhance = resources.hoc.withDataLoader({
  name: RESOURCE_NAME,
  loader: api.getServers,
});

export default enhance(Servers);
