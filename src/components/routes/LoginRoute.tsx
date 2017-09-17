import * as React from 'react';
import styled from 'styled-components';
import CentredContent from '../layout/ContainerCenter';
import LoginRouteForm, { ILoginRouteFormSubmitData } from './LoginRouteForm';
import en_US from '../../locates/en-US';
import { authorizeReq } from '../../reducers/tokenReducer';
import { connect, Dispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { IState } from '../../reducers/index';

interface ILoginRouteProps {
  authorize: (data: ILoginRouteFormSubmitData) => any;
  authorized: boolean;
  disabled: boolean;
  error: boolean;
}

const LoginRoute = (props: ILoginRouteProps) => (
  <Container>
    {props.authorized ? (
      <Redirect to='/' />
    ) : (
      <CentredContent>
        <Content>
          <LogoContainer>
            <LogoImage
              src={require('../../assets/logo-white.png')}
              alt={en_US.logo}
            />
          </LogoContainer>
          <LoginRouteForm
            disabled={props.disabled}
            error={props.error}
            onSubmit={props.authorize}
          />
        </Content>
      </CentredContent>
    )}
  </Container>
);

const mapStateToProps = (state: IState) => ({
  authorized: state.token.authorized,
  disabled: state.token.authorizing,
  error: state.token.error,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  authorize(data: ILoginRouteFormSubmitData) {
    dispatch(authorizeReq(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(
  LoginRoute,
);

const Container = styled.div`
  height: 100%;
  background-color: #0b0f27;
  background-image: url(${require('../../assets/background.png')});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const LogoContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  user-select: none;
`;

const LogoImage = styled.img`
  user-drag: none;
  height: 64px;
`;

const Content = styled.div`
  width: 360px;
  box-sizing: border-box;
  @media (max-width: 400px) {
    width: 100%;
    padding: 0 20px;
  }
`;
