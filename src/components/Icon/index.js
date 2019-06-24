/* eslint-disable react/no-unknown-property */
// @flow
import * as React from 'react';
import styled from 'styled-components';

const icons = {
    auth: (
        <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M3 4c0-2.2 1.8-4 4-4s4 1.8 4 4v3h2c.6 0 1 .4 1 1v9c0 .6-.4 1-1 1H1c-.6 0-1-.4-1-1V8c0-.6.4-1 1-1h2V4zm2 3h4V4c0-1.1-.9-2-2-2s-2 .9-2 2v3zm3 4a1 1 0 1 0-2 0v3a1 1 0 0 0 2 0v-3z" fill="currentColor" />
        </svg>
    ),
    user: (
        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M3 4c0-2.206 1.794-4 4-4s4 1.794 4 4v1c0 2.206-1.794 4-4 4S3 7.206 3 5V4zm4 7c1.555 0 2.969-.6 4.036-1.574C12.797 10 14 11.311 14 13v3H0v-3c0-1.689 1.203-3 2.964-3.574A5.969 5.969 0 0 0 7 11z" fill="currentColor" />
        </svg>
    ),
    logout: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M6 16h9c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1H6c-.6 0-1 .4-1 1v3h2V2h7v12H7v-2H5v3c0 .6.4 1 1 1zM0 8l4-4v3h6v2H4v3L0 8z" fill="currentColor" />
        </svg>
    ),
    close: (
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="currentColor" />
            <path d="M0 0h24v24H0z" fill="none" />
        </svg>
    ),
};

export type IconNameT = $Keys<typeof icons>;

type PropsT = {
    name: IconNameT,
    size?: number
};

const Icon = ({
    name,
    size,
    ...props
}: PropsT) => (
    <IconContainer
        style={{
            width: size,
            height: size,
        }}
        {...props}
    >
        {icons[name]}
    </IconContainer>
);

Icon.defaultProps = {
    size: 24,
};

const IconContainer = styled.div`
    cursor: ${props => props.onClick ? 'pointer' : 'default'}
    svg {
        width: 100%;
        height: 100%;
    }
`;

export default React.memo<PropsT>(Icon);
