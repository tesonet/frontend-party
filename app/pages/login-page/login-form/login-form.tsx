import * as React from 'react';
import { connect } from 'react-redux';

import { ReduxState } from 'Reducers/index';
import { login } from 'Actions/auth';
import Logo from 'Components/logo';
import Input from 'Components/input';
import Button from 'Components/button';
import UserIcon from 'Components/icons/user';
import LockIcon from 'Components/icons/lock';

import * as Styles from './login-form.scss';

interface State {
  username: string;
  password: string;
}

interface StateProps {
  error: string;
}

interface DispatchProps {
  login: typeof login;
}

type Props = DispatchProps & StateProps;

class LoginForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.setPassword = this.setPassword.bind(this);
    this.setUsername = this.setUsername.bind(this);
    this.state = {
      username: '',
      password: '',
    };
  }

  setUsername(username: string) {
    this.setState({
      username,
    });
  }

  setPassword(password: string) {
    this.setState({
      password,
    });
  }

  render() {
    const { username, password } = this.state;
    const { error } = this.props;

    return (
      <div className={Styles.form}>
        <Logo type="secondary" className={Styles.logo} />
        <Input
          value={username}
          onChange={this.setUsername}
          placeholder="Username"
          icon={<UserIcon />}
        />
        <Input
          value={password}
          onChange={this.setPassword}
          placeholder="Password"
          type="password"
          icon={<LockIcon />}
        />
        <Button
          onClick={() => this.props.login(username, password)}
          type="primary"
        >
          Log In
        </Button>
        <div className={Styles.error} data-test-id="login-error">
          {error}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps: DispatchProps = {
  login,
};

const mapStateToprops = (state: ReduxState): StateProps => ({
  error: state.auth.loginError,
});

export default connect(
  mapStateToprops,
  mapDispatchToProps,
)(LoginForm);
