import styled from 'styled-components';

import { COLORS } from '../../app';

const ListItem = styled.li`
    color: ${COLORS.listItemTextColor};
    display: flex;
    justify-content: space-between;
    height: 60px;
    line-height: 36px;
`;

export default ListItem;
