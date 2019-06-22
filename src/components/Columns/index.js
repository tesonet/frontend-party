/* eslint-disable no-confusing-arrow */
// @flow

import * as React from 'react';
import styled from 'styled-components';


type ColumnsPropsT = {
    align?: 'start' | 'end' | 'center',
}

const alignMapping = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
};

export const Columns: React.ComponentType<ColumnsPropsT> = styled.div`
    width: 100%;
    display: flex;
    align-items: ${props => alignMapping[props.align || 'center']}
`;


type ColPropsT = {
    isNarrow?: boolean,
    isNear?: boolean
}

export const Col: React.ComponentType<ColPropsT> = styled.div`
    flex: ${props => props.isNarrow ? 'none' : '1'};
    padding-right: ${props => props.isNear ? '10px' : '16px'};

    &:first-child {
        padding-top: 0;
    }

    &:last-child {
        padding-right: 0;
    }
`;

export default {
    Columns,
    Col,
};
