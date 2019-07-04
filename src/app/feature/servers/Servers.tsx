import React, { SyntheticEvent } from 'react';
import { RouteProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Server } from '../../types';
import { Header } from '../../shared/header/Header';
import { serversFetchThunk, serversClearAction } from '../../store/entities';

export type ServersComponentProps = RouteProps & {
  fetchData: () => void;
  invalidateData: () => void;
  changeOrder: () => void;
  servers: Server[];
};

export class ServersConnectable extends React.Component<ServersComponentProps> {

  componentDidMount() {
    this.props.fetchData();
  }

  componentWillUnmount() {
    this.props.invalidateData();
  }

  onClick = (event: SyntheticEvent) => {
    this.props.changeOrder();
  }

  renderList() {
    return (
      <table style={{width: '100%'}}>
        <thead>
          <tr>
            <th id="location" onClick={this.onClick} style={{textAlign: 'left'}}>Server</th>
            <th id="distance" onClick={this.onClick} style={{textAlign: 'right'}}>Distance</th>
          </tr>
        </thead>
        <tbody>
          {this.props.servers.map(({name, distance}, i) => (
            <tr key={`${name}${distance}`}>
              <td style={{textAlign: 'left'}}>{name}</td>
              <td style={{textAlign: 'right'}}>{distance} km</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }

  render() {
    return (
      <div>
        <Header />
        <div>
          {this.renderList()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (storeState: any) => ({
  servers: storeState.entities.servers,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchData:  () => dispatch(serversFetchThunk as any),
  invalidateData:  () => dispatch(serversClearAction() as any),
  changeOrder: () => { console.log('changing order'); }
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

export const Servers = connect(mapStateToProps, mapDispatchToProps, mergeProps)(ServersConnectable);
