import * as LoginLogo from '@assets/testio-logo-black.png';
import { ButtonWithIcon } from '@components/ButtonWithIcon';
import { Optional } from '@components/Helpers/Optional';
import { Loading } from '@components/Loading';
import { styled } from '@components/theme';
import { authActions } from '@modules/auth/duck/actions';
import { State } from '@redux/reducer';
import * as React from 'react';
import { DispatchProp, connect } from 'react-redux';

import { config } from '../../common/Config';
import { useMountEffect } from '../../helpers/lifecycleEffects';

import { serverActions } from './duck/actions';
import { getAllServers, isServersLoading } from './duck/selectors';

type StateProps = ReturnType<typeof mapStateToProps>;
type Props = StateProps & DispatchProp;

const PageHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 40px 16px;
`;

const Logo = styled.img`
  align-self: center;
`;

const ServersTable = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 16px;
`;

const ServerRow = styled(Row)`
  &:hover {
    background: ${p => p.theme.colors.grayLight};
  }

  &:not(:last-of-type) {
    border-bottom: 1px solid ${p => p.theme.colors.border};
  }
`;

const ServerHeaderRow = styled(Row)`
  background: ${p => p.theme.colors.grayLight};
  border: 1px solid ${p => p.theme.colors.border};
`;

const ServerRowCell = styled.span`
  color: ${p => p.theme.colors.darkGray};
  font-family: ${p => p.theme.fonts.family};
  font-size: ${p => p.theme.fonts.sizes.normal};
`;

const Component: React.FunctionComponent<Props> = ({
  servers,
  loading,
  dispatch,
}) => {
  useMountEffect(() => {
    dispatch(serverActions.getAll());
  });

  const logout = () => {
    dispatch(authActions.logout());
  };

  return (
    <React.Fragment>
      <PageHeader>
        <Logo src={LoginLogo} />
        <ButtonWithIcon
          type="button"
          onClick={logout}
          styleType="ghost"
          iconName="exit"
        >
          Logout
        </ButtonWithIcon>
      </PageHeader>

      <ServersTable>
        <ServerHeaderRow>
          <ServerRowCell>SERVER</ServerRowCell>
          <ServerRowCell>DISTANCE</ServerRowCell>
        </ServerHeaderRow>

        <Optional renderIf={loading}>
          <Loading />
        </Optional>
        <Optional renderIf={!loading}>
          {servers.map((server, index) => (
            <ServerRow key={index}>
              <ServerRowCell>{server.name}</ServerRowCell>
              <ServerRowCell>
                {server.distance} {config.distanceUnits}
              </ServerRowCell>
            </ServerRow>
          ))}
        </Optional>
      </ServersTable>
    </React.Fragment>
  );
};

const mapStateToProps = (state: State) => ({
  loading: isServersLoading(state),
  servers: getAllServers(state).sort(
    (a, b) => a.distance - b.distance || a.name.localeCompare(b.name),
  ),
});

export const ServerList = connect(mapStateToProps)(Component);
