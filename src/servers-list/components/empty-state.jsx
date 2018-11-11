import React from 'react';
import styled from 'styled-components';

import ListItem from './list-item';

const EmptyStateListItem = styled(ListItem)`
    justify-content: center;
`;

const EmptyState = () => (
    <EmptyStateListItem className="list-group-item">
        <span>No Results</span>
    </EmptyStateListItem>
);

export default EmptyState;
