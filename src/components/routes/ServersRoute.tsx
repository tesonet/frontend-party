import * as React from 'react';
import Alert from '../Alert';
import ContainerCenter from '../layout/ContainerCenter';
import ContainerScroll from '../layout/ContainerScroll';
import Container from '../layout/Container';
import ListItem from '../list/ListItem';
import ListItemHeader from '../list/ListItemHeader';
import Loader from '../Loader';
import OnView from '../layout/OnView';
import en_US from '../../locates/en-US';
import styled from 'styled-components';
import styles from '../../styles';
import { destroyServerList, requestServerList } from '../../reducers/serversReducer';
import { connect, Dispatch } from 'react-redux';
import { map } from 'lodash';
import { IState } from '../../reducers/index';
import { IServerEntity } from '../../services/RequestServers';

interface IServersRouteProps {
  error: boolean;
  loading: boolean;
  servers: IServerEntity[];
  destroyServerList: () => any;
  requestServerList: () => any;
}

const ServersRoute = (props: IServersRouteProps) => (
  <OnView
    onDidMount={props.requestServerList}
    onWillUnmount={props.destroyServerList}
  >
    {props.loading ? (
      <ContainerCenter>
        <Loader />
      </ContainerCenter>
    ) : props.error ? (
      <PaddedCentredContent>
        <Alert>{en_US.serverListError}</Alert>
      </PaddedCentredContent>
    ) : (
      <Container>
        <ListItemHeader>
          <div>{en_US.serverServer}</div>
          <div>{en_US.serverDistance}</div>
        </ListItemHeader>
        <ContainerScroll>
          <div>
            {map(props.servers, (server, index) => (
              <ListItem key={index}>
                <div>{server.name}</div>
                <div>{server.distance}</div>
              </ListItem>
            ))}
          </div>
        </ContainerScroll>
      </Container>
    )}
  </OnView>
);

const PaddedCentredContent = styled(ContainerCenter)`
  padding: ${styles.spacing(3)};
`;

const mapStateToProps = (state: IState) => ({
  error: state.servers.error,
  loading: state.servers.initializing,
  servers: state.servers.servers,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  destroyServerList() {
    dispatch(destroyServerList());
  },
  requestServerList() {
    dispatch(requestServerList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(
  ServersRoute,
);
