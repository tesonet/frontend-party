import React from 'react';
import styled from 'styled-components';


const ListItem = styled.li`
    background-color: ${props => props.header ? '#f5f5f5' : '#ffffff'};
    text-transform: ${props => props.header ? 'uppercase' : 'initial'};
    color: #666666;
    display: flex;
    justify-content: center;
    height: 60px;
    line-height: 36px;
`;

const EmptyState = () => (
    <ListItem className="list-group-item">
        <span>No Results</span>
    </ListItem>
);

export default EmptyState;
