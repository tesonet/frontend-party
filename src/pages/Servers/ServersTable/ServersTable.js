import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import useSorting from '@/hooks/useSorting';
import { getServers } from '@/api/services/servers.service';
import WithLoader from '@/shared/components/WithLoader/WithLoader';
import {
  StyledRow,
  StyledContentContainer,
  StyledContentMessage,
  StyledContainer,
  StyledColumn,
  StyledArrowUp,
  StyledArrowDown,
} from './ServersTable.styles';

const ServersTable = () => {
  const {
    servers,
    serversLoading,
    serversAuthFailure,
    serversGlobalFailure,
  } = useSelector((state) => state.servers);
  const { items: sortedServers, sortData, sortConfig } = useSorting(servers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServers());
  }, []);

  const formatDistanceString = (distance) => `${distance} km`;

  const renderServerRow = ({ name, distance }, index) => (
    <StyledRow key={`${name}${index}`}>
      <div>{name}</div>
      <div>{formatDistanceString(distance)}</div>
    </StyledRow>
  );

  const renderSortingIndicator = (name) => {
    if (sortConfig.key === name) {
      return sortConfig.direction === 'asc' ? <StyledArrowUp /> : <StyledArrowDown />;
    }
    return null;
  };

  const Servers = () => sortedServers.map((server, index) => renderServerRow(server, index));

  const ServersWithLoading = WithLoader(Servers);

  if (serversAuthFailure) {
    return <Redirect to="/login" />;
  }
  if (serversGlobalFailure) {
    return (
      <StyledContentMessage
        data-testid="servers-error"
      >
        Failed to get servers. Try again later.
      </StyledContentMessage>
    );
  }

  return (
    <>
      <StyledContainer>
        <StyledColumn onClick={() => sortData('name')}>
          SERVER
          {renderSortingIndicator('name')}
        </StyledColumn>
        <StyledColumn onClick={() => sortData('distance')}>
          {renderSortingIndicator('distance')}
          DISTANCE
        </StyledColumn>
      </StyledContainer>
      <StyledContentContainer>
        <ServersWithLoading isLoading={serversLoading} />
      </StyledContentContainer>
    </>

  );
};

export default ServersTable;
