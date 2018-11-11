import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import ListItem from '../list-item';
import translations from './index.lang';

const EmptyStateListItem = styled(ListItem)`
    justify-content: center;
`;

const EmptyState = () => (
    <EmptyStateListItem className="list-group-item">
        <FormattedMessage {...translations.noResults} />
    </EmptyStateListItem>
);

export default EmptyState;
