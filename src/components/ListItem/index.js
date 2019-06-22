/* eslint-disable no-confusing-arrow */
// @flow
import * as React from 'react';
import styled from 'styled-components';

import {
    Columns,
    Col,
} from 'components/Columns';


type PropsT = {
    isHeader?: boolean,
    meta?: any,
    children: any,
};

const ListItem = ({
    children,
    isHeader,
    meta,
}: PropsT) => (
    <Item
        align="center"
        isHeader={isHeader}
    >
        <Col>
            {children}
        </Col>
        {!!meta && (
            <Col isNarrow>
                {meta}
            </Col>
        )}
    </Item>
);

ListItem.defaultProps = {
    meta: null,
    isHeader: false,
};

const Item = styled(Columns)`
    padding: 16px;
    color: #666;
    background: ${props => props.isHeader ? '#F5F5F5' : 'white'};
    font-size: ${props => props.isHeader ? '14px' : '16px'};
    border-bottom: 1px solid #E6E6E6;
`;

export default React.memo<PropsT>(ListItem);
