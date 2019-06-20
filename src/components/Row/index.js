// @flow
/* eslint-disable no-confusing-arrow */

import * as React from 'react';
import styled, { css } from 'styled-components';


type PropsT = {
    withSpace?: boolean,
    align?: 'right' | 'center';
}

const justifyContent = {
    center: 'center',
    right: 'flex-end',
};

const Row: React.ComponentType<PropsT> = styled.div`
    margin-top: ${props => props.space ? '48px' : '24px'};
    
    display: ${props => props.align ? 'flex' : 'block'};
    justify-content: ${props => justifyContent[props.align]};

    ${props => !props.withSpace && css`
        &:first-child {
            margin: 0;
        }
    `}
`;

export default Row;
