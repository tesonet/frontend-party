import * as React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { ReduxState } from 'Reducers/index';
import { fetchServers } from 'Actions/servers';
import { logout } from 'Actions/auth';
import Logo from 'Components/logo';
import Button from 'Components/button';
import ExitIcon from 'Components/icons/exit';
import { Server } from 'Interfaces/common';

import * as Styles from './servers-page.scss';

interface StateProps {
  isAuthenticated: boolean;
  servers: Server[];
}

interface DispatchProps {
  redirectToLogin: () => void;
  fetchServers: typeof fetchServers;
  logout: typeof logout;
}

type Props = StateProps & DispatchProps;

class LoginPage extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.isAuthenticated) {
      this.props.redirectToLogin();
    } else {
      this.props.fetchServers();
    }
  }

  render() {
    const { servers, isAuthenticated } = this.props;
    return (
      <div className={Styles.container}>
        {isAuthenticated && servers.length > 0 ? (
          <>
            <div className={Styles.header}>
              <Logo type="primary" />
              <Button
                onClick={this.props.logout}
                type="secondary"
                className={Styles.logoutBtn}
              >
                <ExitIcon className={Styles.exitIcon} />
                Logout
              </Button>
            </div>
            <div className={Styles.subheader}>
              <div className={Styles.text}>SERVER</div>
              <div className={Styles.text}>DISTANCE</div>
            </div>
            {servers.map((server, index) => (
              <div
                className={Styles.serverEntry}
                key={`${server.name}-${index}`}
                data-test-id="server-entry"
              >
                <div className={Styles.text}>{server.name}</div>
                <div className={Styles.text}>{`${server.distance} km`}</div>
              </div>
            ))}
          </>
        ) : (
          <>loading...</>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: ReduxState): StateProps => ({
  isAuthenticated: state.auth.isAuthenticated,
  servers: state.servers.servers,
});

const mapDispatchToProps: DispatchProps = {
  fetchServers,
  logout,
  redirectToLogin: () => push('/login'),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage);
