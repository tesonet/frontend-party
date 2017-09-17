import * as React from 'react';
import Container from '../layout/Container';
import NavigationBar from './NavigationBar';
import styled from 'styled-components';

interface INavigationContainerProps {
  children: React.ReactElement<any>,
}

export default (props: INavigationContainerProps) => (
  <NavigationBody>
    <NavigationBar />
    <Container>
      {props.children}
    </Container>
  </NavigationBody>
);

const NavigationBody = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
`;
