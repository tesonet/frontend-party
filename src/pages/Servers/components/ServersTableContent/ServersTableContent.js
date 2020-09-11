import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getServers } from '@/api/services/servers.service';
import { StyledRow, StyledContentContainer, StyledContentMessage } from './ServersTableContent.styles';

const ServersTableContent = () => {
  const {
    servers,
    serversLoading,
    serversAuthFailure,
    serversGlobalFailure
  } = useSelector(state => state.servers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServers());
  }, []);

  const renderServerRow = ({ name, distance }, index) => (
    <StyledRow key={`${name}${index}`}>
      <div>
        {name}
      </div>
      <div>
        {distance} km
      </div>
    </StyledRow>
  )

  const Servers = () => servers.map((server, index) => renderServerRow(server, index));

  if (serversAuthFailure) return <Redirect to='/login' />
  if (serversGlobalFailure) return <StyledContentMessage>Failed to get servers. Try again later.</StyledContentMessage>

  return (
    <StyledContentContainer>
      {serversLoading ? <StyledContentMessage>Servers loading...</StyledContentMessage> : <Servers />}
    </StyledContentContainer>
  )
}

export default ServersTableContent;