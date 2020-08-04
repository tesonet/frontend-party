import * as React from 'react';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { Server } from '@typings/servers';

interface ServerItemProps {
  data: Server;
}

const ServerItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1.5rem;
  align-items: center;
  color: ${themeGet('colors.darkText')};
  border-bottom: 1px solid ${themeGet('colors.divider')};
  background-color: ${themeGet('colors.white')};
  min-height: 5.5rem;
`;

export const ServerItem = ({ data }: ServerItemProps) => (
  <ServerItemWrapper>
    <div>{data.name}</div>
    <div>{data.distance} km</div>
  </ServerItemWrapper>
);
