// @flow

import * as React from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { Servers } from '../components/Servers/Servers';

const TopRow = styled.div`
  height: ${props => props.theme.height.regular};
  line-height: ${props => props.theme.height.regular};
  background-color: ${props => props.theme.colour.lightBackground};
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 100px;
  left: 0;
  right: 0;
  span {
    color: ${props => props.theme.colour.grey};
    text-transform: uppercase;
    padding: 0 20px;
  }
`;

const ServersWrapper = styled.div`
  margin-top: calc(${props => props.theme.height.regular} + 100px);
`;

type ServersPageProps = {
  isLoggedIn: boolean,
};

const hasToken = localStorage.getItem('token');

export const ServersPageDisconnected = ({ isLoggedIn }: ServersPageProps) =>
  isLoggedIn && hasToken ? (
    <React.Fragment>
      <TopRow>
        <span>server</span>
        <span>distance</span>
      </TopRow>
      <ServersWrapper>
        <Servers />
      </ServersWrapper>
    </React.Fragment>
  ) : (
    <Redirect to="/login" />
  );

const mapStateToProps = state => ({ isLoggedIn: state.loginReducer.isLoggedIn });

export const ServersPage = connect(mapStateToProps)(ServersPageDisconnected);
