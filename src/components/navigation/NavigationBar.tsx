import * as React from 'react';
import en_US from '../../locates/en-US';
import styled from 'styled-components';
import styles from '../../styles';
import { connect, Dispatch } from 'react-redux';
import { destroy as logout } from '../../reducers/tokenReducer';

interface INavigationBar {
  logout: () => any;
}

const NavigationBar = (props: INavigationBar) => (
  <Container>
    <NavigationImage
      src={require('../../assets/logo-colored.png')}
      alt={en_US.logo}
    />
    <NavigationLogout onClick={props.logout}>
      <i className='fa fa-sign-out' />
      <span>{en_US.logout}</span>
    </NavigationLogout>
  </Container>
);

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  logout() {
    dispatch(logout());
  },
});

export default connect(null, mapDispatchToProps)(
  NavigationBar,
);

const Container = styled.div`
  align-items: center;
  box-sizing: border-box;
  border-bottom: 1px solid ${styles.colors.gray2};
  display: flex;
  padding: 0 ${styles.spacing(3)};
  justify-content: space-between;
  height: ${styles.spacing(18)};
`;

const NavigationImage = styled.img`
  height: 30px;
  user-select: none;
  user-drag: none;
`;

const NavigationLogout = styled.span`
  color: ${styles.colors.darkBlue};
  transition: color ${styles.animation.duration.m};
  cursor: pointer;
  i + span {
    margin-left: ${styles.spacing(1)};
  }
  &:hover {
    color: ${styles.colors.primary};
  }
`;
