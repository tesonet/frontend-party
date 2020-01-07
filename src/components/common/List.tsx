import React from 'react';
import styled from 'styled-components';
import { background, color, layout } from 'styled-system';
import Box from '../styled/Box';

type ListTypes = {
  children: React.ElementType;
};

const ListItem = styled.div``;

const ListRow = styled.div`
  border-radius: ${props => props.theme.radii[0]};
  height: ${props => props.theme.sizes[0]};
  font-family: ${props => props.theme.sizes[0]};
`;

const ListHeaderRow = styled(ListRow)`
  background-color: ${props => props.theme.colors.listHeading};
`;

export default function List({ children }: ListTypes) {
  return <Box>{children}</Box>;
}
