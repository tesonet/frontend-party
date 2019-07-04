import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { logoutAction } from '../../store/authentication';
import './Logout.css';
import logout from '../../../assets/icons/logout.svg';

type LogoutComponentProps = {
  onLogoutClick: () => void;
}

export const LogoutConnectable: React.FC<LogoutComponentProps> = (props: LogoutComponentProps) => (
  <button className="logout" onClick={props.onLogoutClick}>
    <img src={logout} alt="logout" style={{ display: 'inline', position: 'relative', width: '24px', verticalAlign: 'middle', }} />
    Logout
  </button>
);

const mapStateToProps = (storeState: any) => ({
  authenticationSlice: storeState.authentication,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onLogoutClick: () => dispatch(logoutAction()),
});

const mergeProps = (stateProps: any, dispatchProps: any, ownProps: any) => {
  // const { location, history, match } = ownProps;
  return ({
    ...stateProps,
    ...dispatchProps,
    // location,
    // history,
    // match,
  });
};

export const Logout = connect(mapStateToProps, mapDispatchToProps, mergeProps)(LogoutConnectable);