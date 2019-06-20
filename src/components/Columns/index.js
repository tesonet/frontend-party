/* eslint-disable no-confusing-arrow */
// @flow

import * as React from 'react';
import styled from 'styled-components';


type ColumnsPropsT = {}

const Columns: React.ComponentType<ColumnsPropsT> = styled.div`
    display: flex;
`;


type ColPropsT = {
    isNarrow?: boolean,
    isResponsive?: boolean,
    theme: ThemeT
}

const Col: React.ComponentType<ColPropsT> = styled.div`
    flex: ${props => props.isNarrow ? 'none' : '1'};
    padding-right: 16px;

    &:first-child {
        padding-top: 0;
    }

    &:last-child {
        padding-right: 0;
    }
`;

Columns.Col = Col;

export default Columns;
