// @flow
import * as React from 'react';
import styled from 'styled-components';


type PropsT = {};

const Center = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default React.memo<PropsT>(Center);
