import React from 'react';
import styled from 'styled-components';
import Box from '../styled/Box';

type ListTypes = {
  children: React.ReactNode;
};

export const ListItem = styled.div``;

export const ListRow = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: ${props => props.theme.radii[0]};
  height: ${props => props.theme.sizes[0]};
  font-size: ${props => props.theme.fontSizes[1]};
  padding: 25px 15px 20px 15px;
  color: #666;
`;

export const ListHeaderRow = styled(ListRow)`
  background-color: ${props => props.theme.colors.listHeading};
  font-size: ${props => props.theme.fontSizes[0]};
  color: #999;
`;
export const ListScrollable = styled(ListRow)`
  background-color: ${props => props.theme.colors.listHeading};
  font-size: ${props => props.theme.fontSizes[0]};
`;

export default function List({ children }: ListTypes) {
  return <Box>{children}</Box>;
}
