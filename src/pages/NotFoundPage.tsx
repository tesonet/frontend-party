import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { RoutesMap } from '@redux/ducks/routes';

const Wrapper = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const H1Styled = styled.h1`
  font-size: 7.2rem;
`;

const NotFoundPage = () => (
  <Wrapper>
    <H1Styled>404:(</H1Styled>
    <div>
      Unfortunetaly, the page you were looking for does not exist. Please{' '}
      <Link to={RoutesMap.HOME_ROUTE}>click here</Link> to go back to home page.
    </div>
    <br />
    <div>
      Or{' '}
      <a href="https://youtu.be/G1IbRujko-A" target="_blank">
        click this magical link
      </a>
    </div>
  </Wrapper>
);

export default NotFoundPage;
