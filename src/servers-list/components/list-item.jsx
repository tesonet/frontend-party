import styled from 'styled-components';

import { COLORS } from '../../app';

const ListItem = styled.li`
    background-color: ${props => props.header ? COLORS.listHeaderBackgroundColor : 'initial'};
    text-transform: ${props => props.header ? 'uppercase' : 'initial'};
    color: ${COLORS.listItemTextColor};
    display: flex;
    justify-content: space-between;
    height: 60px;
    line-height: 36px;
`;

export default ListItem;
