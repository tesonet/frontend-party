/* eslint-disable no-confusing-arrow */
// @flow
import * as React from 'react';
import styled, { css } from 'styled-components';

import Header from 'components/Header';


type PropsT = {
    fullHeight?: boolean,
    children: any,
};

const Screen = ({
    children,
    fullHeight,
}: PropsT) => (
    <ScreenComponent
        fullHeight={fullHeight}
    >
        <Header />
        {children}
    </ScreenComponent>
);

Screen.defaultProps = {
    fullHeight: false,
};

const ScreenComponent = styled.div`
    display: flex;
    flex-direction: column;
    ${props => props.fullHeight ? css`
        height: 100vh;
    ` : css`
        min-height: 100vh;
    `}
`;



export default React.memo<PropsT>(Screen);
