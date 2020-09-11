import React from 'react';
import { StyledRow, StyledContentContainer } from './ServersTableContent.styles';

const ServersTableContent = () => {
  const testArray = [
    { server: 'Server', distance: 10 }, { server: 'Server', distance: 10 }, { server: 'Server', distance: 10 }, { server: 'Server', distance: 10 }, { server: 'Server', distance: 10 },
    { server: 'Server', distance: 10 }, { server: 'Server', distance: 10 }, { server: 'Server', distance: 10 }, { server: 'Server', distance: 10 }, { server: 'Server', distance: 10 },
    { server: 'Server', distance: 10 }, { server: 'Server', distance: 10 }, { server: 'Server', distance: 10 }, { server: 'Server', distance: 10 }, { server: 'Server', distance: 10 },
    { server: 'Server', distance: 10 }, { server: 'Server', distance: 10 }, { server: 'Server', distance: 10 }, { server: 'Server', distance: 10 }, { server: 'Server', distance: 10 },
    { server: 'Server', distance: 10 }, { server: 'Server', distance: 10 }, { server: 'Server', distance: 10 }, { server: 'Server', distance: 10 }, { server: 'Server', distance: 10 },
    { server: 'Server', distance: 10 }, { server: 'Server', distance: 10 }, { server: 'Server', distance: 10 }, { server: 'Server', distance: 10 }, { server: 'Server', distance: 10 }
  ];
  const renderServerRow = ({ server, distance }) => (
    <StyledRow>
      <div>
        {server}
      </div>
      <div>
        {distance} km
      </div>
    </StyledRow>
  )
  return (
    <StyledContentContainer>
      {testArray.map((server) => renderServerRow(server))}
    </StyledContentContainer>
  )
}

export default ServersTableContent;