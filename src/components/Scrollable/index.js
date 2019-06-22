// @flow
import * as React from 'react';
import styled from 'styled-components';


type PropsT = {
    children: any,
    header?: ?any,
};

const Scrollable = ({
    children,
    header,
    ...props
}: PropsT) => (
    <Component
        {...props}
    >
        {!!header && header}
        <ScrollableComponent>
            <Body>
                <ScrollableBody>
                    {children}
                </ScrollableBody>
            </Body>
        </ScrollableComponent>
    </Component>
);

Scrollable.defaultProps = {
    header: null,
};

const Component = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 0;
`;

const ScrollableComponent = styled.div`
    display: flex;
    flex: 1;
    min-height: 0;
`;

const Body = styled.div`
    flex: 1;
    overflow: auto;
`;

const ScrollableBody = styled.div`
    
`;

export default React.memo<PropsT>(Scrollable);
