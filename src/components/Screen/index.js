/* eslint-disable no-confusing-arrow */
// @flow
import * as React from 'react';
import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';

import { type AuthReducerT } from 'store/auth';

import Header from 'components/Header';
import { appName } from 'config';


type PropsT = {
    title?: string,
    fullHeight?: boolean,
    children: any,
};

const Screen = ({
    title,
    children,
    fullHeight,
    ...props
}: PropsT) => {
    const auth: AuthReducerT = useSelector(state => state.auth);

    React.useEffect(() => {
        let documentTitle = appName;

        if (title) {
            documentTitle = `${title} – ${appName}`;
        }

        document.title = documentTitle;
    }, [title]);

    return (
        <ScreenComponent
            fullHeight={fullHeight}
            {...props}
        >
            {!!auth.token && (
                <Header />
            )}
            {children}
        </ScreenComponent>
    );
};

Screen.defaultProps = {
    fullHeight: false,
    title: '',
};

const ScreenComponent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    ${props => props.fullHeight ? css`
        height: 100vh;
    ` : css`
        min-height: 100vh;
    `}
`;

export default React.memo<PropsT>(Screen);
