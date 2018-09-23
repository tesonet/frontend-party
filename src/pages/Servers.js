// @flow

import * as React from 'react';
import styled from 'styled-components';

const TopRow = styled.div`
  height: ${props => props.theme.height.regular};
  line-height: ${props => props.theme.height.regular};
  background-color: ${props => props.theme.colour.lightBackground};
  display: flex;
  justify-content: space-between;
  span {
    color: ${props => props.theme.colour.grey};
    text-transform: uppercase;
    padding: 0 20px;
  }
`;

export class ServersPage extends React.Component<{}, {}> {
  render() {
    return (
      <React.Fragment>
        <TopRow>
          <span>server</span>
          <span>distance</span>
        </TopRow>
      </React.Fragment>
    );
  }
}
