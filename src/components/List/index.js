// @flow
import * as React from 'react';
import styled from 'styled-components';


type PropsT = {
    children: any,
};

const List = styled.div`
    border-top: 1px solid #E6E6E6;
`;

export default React.memo<PropsT>(List);
