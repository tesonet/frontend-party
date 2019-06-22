/* eslint-disable react/no-unknown-property */
// @flow
import * as React from 'react';
import styled from 'styled-components';

import {
    Columns,
    Col,
} from 'components/Columns';
import Icon, {
    type IconNameT,
} from 'components/Icon';


type PropsT = {
    children: any,
    icon?: ?IconNameT
};

const Action = ({
    children,
    icon,
    ...props
}: PropsT) => (
    <ActionComponent
        {...props}
    >
        <Columns
            align="center"
        >
            {!!icon && (
                <Col isNear>
                    <Icon
                        size={20}
                        name={icon}
                    />
                </Col>
            )}
            <Col>
                {children}
            </Col>
        </Columns>
    </ActionComponent>
);

Action.defaultProps = {
    icon: null,
};

const ActionComponent = styled.button`
    display: flex;
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
    color: #2F3254;

    &:hover {
        color: #99cc33;
    }
`;

export default React.memo<PropsT>(Action);
