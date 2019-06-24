/* eslint-disable no-confusing-arrow */
// @flow
import * as React from 'react';
import styled from 'styled-components';

import {
    Columns,
    Col,
} from 'components/Columns';
import Icon from 'components/Icon';


type PropsT = {
    children: any,
    onClose?: ?() => void,
};

const Message = ({
    children,
    onClose,
}: PropsT) => (
    <MessageComponent
        align="center"
    >
        <Col>
            {children}
        </Col>
        {!!onClose && (
            <Col isNarrow>
                <Icon
                    onClick={onClose}
                    name="close"
                />
            </Col>
        )}
    </MessageComponent>
);

Message.defaultProps = {
    onClose: null,
};

const MessageComponent = styled(Columns)`
    padding: 12px 16px;
    color: #fff;
    border-radius: 4px;
    background: #2F3254;
`;

export default React.memo<PropsT>(Message);
