import * as React from 'react';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

interface ServerListHeaderProps {
  onSortClick: (prop: 'name' | 'distance') => void;
}

const ServerListHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1.5rem;
  align-items: center;
  border-top: 1px solid ${themeGet('colors.divider')};
  border-bottom: 1px solid ${themeGet('colors.divider')};
  min-height: 5.5rem;
`;

const ServerHeaderButton = styled.button`
  border: none;
  color: ${themeGet('colors.text')};
  cursor: pointer;
  height: 3rem;
  background-color: inherit;
  text-transform: uppercase;
`;

export const ServerListHeader = ({ onSortClick }: ServerListHeaderProps) => (
  <ServerListHeaderWrapper>
    <ServerHeaderButton onClick={() => onSortClick('name')}>server</ServerHeaderButton>
    <ServerHeaderButton onClick={() => onSortClick('distance')}>distance</ServerHeaderButton>
  </ServerListHeaderWrapper>
);
