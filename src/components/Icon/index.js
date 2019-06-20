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
};

type IconNameT = $Keys<typeof icons>;

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
    svg {
        width: 100%;
        height: 100%;
    }
`;

export default Icon;
