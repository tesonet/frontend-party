import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';

import BackgroundImage from '../../../assets/background.jpg';

const StyledContainer = styled.div`
  background-color: ${props => props.theme.bgColorDark};
  background-image: url(${BackgroundImage});
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;

// There is an invisible alert box of 5.5rem height above the logo,
// so we need to center out the form view using this method.
const StyledRow = styled(Row)`
  margin-top: -5.5rem;
`;

const LoginContainer = props => (
  <StyledContainer>
    <Container>
      <StyledRow>
        <Col
          xs={{ size: 12 }}
          sm={{ size: 8, offset: 2 }}
          md={{ size: 6, offset: 3 }}
          lg={{ size: 4, offset: 4 }}
        >
          {props.children}
        </Col>
      </StyledRow>
    </Container>
  </StyledContainer>
);

LoginContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default LoginContainer;
