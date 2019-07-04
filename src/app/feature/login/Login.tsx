import React, { ChangeEvent, FormEvent, createRef } from 'react';
import { RouteProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as H from 'history';
import './Login.css';
import account from '../../../assets/icons/account.svg';
import lock from '../../../assets/icons/lock.svg';
import { authenticateThunk, AuthenticationSliceShape } from '../../store/authentication';
import { Credentials } from '../../types';

type RedirectedFromLocationState = {
  redirectedFrom: H.Location;
};

type LoginComponentProps = RouteProps & {
  location: H.Location<RedirectedFromLocationState>;
  authentication: AuthenticationSliceShape;
  onLogin: (credentials: Credentials) => void;
};

type LoginComponentState = {
  username: Username;
  password: Password;
};

type Username = {
  dirty: boolean;
  value?: string;
};
type Password = {
  dirty: boolean;
  value?: string;
};

export class LoginConnectable extends React.Component<LoginComponentProps, LoginComponentState> {
  state: LoginComponentState = {
    username: { dirty: false, value: '', },
    password: { dirty: false, value: '', },
  }

  formRef: React.RefObject<HTMLFormElement>;

  constructor(props: LoginComponentProps) {
    super(props);
    this.formRef = createRef<HTMLFormElement>();
  }

  get isFormValid() { 
    return this.state.password.value && this.state.username.value
  }

  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const id = event.target.id as keyof(LoginComponentState);
    const value = event.target.value;
    this.setState({ 
      [id]: {value, dirty: true} 
    } as any);
  };

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const credentials: Credentials = { 
      username: this.state.username.value!,
      password: this.state.password.value!,
    };

    if (this.isFormValid) {
      this.props.onLogin(credentials);
    }
  };

  className = (id: 'username'|'password') => this.state[id].dirty 
    ? (this.state[id].value) ? 'dirty valid' : 'dirty invalid'
    :  'pristine';

  render() {
    // const { redirectedFrom } = this.props.location.state || { redirectedFrom: { pathname: "/" } };
    return (
      <div>
        <div className="login-page">
          <div className="login-box">
            <form ref={this.formRef} onSubmit={this.handleSubmit}>
              {this.props.authentication.error && (
                <div className="login-error">{this.props.authentication.error}</div>
              )}
              <div>
                <img src={account} alt="user" />
                <input type="text" id="username" placeholder="Username" required className={this.className("username")} value={this.state.username.value} onChange={this.handleInputChange} />
              </div>
              <div>
                <img src={lock} alt="lock" />
                <input type="password" id="password" placeholder="Password" required className={this.className("password")} value={this.state.password.value} onChange={this.handleInputChange} />
              </div>
              <input type="submit" value="Log in" />
            </form>
            {/* <Pre navigationOrRedirect={this.props.location.state ? `redirected from ${redirectedFrom.pathname}` : `navigation`} {...this.props}/> */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (storeState: any, ownProps: any) => ({
  authentication: storeState.authentication,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onLogin: (credentials: Credentials) => dispatch(authenticateThunk(credentials) as any),
});

const mergeProps = (stateProps: any, dispatchProps: any, ownProps: any) => {
  const { location } = ownProps;
  return ({
    ...stateProps,
    ...dispatchProps,
    location,
    // history,
    // match,
  });
};

export const Login = connect(mapStateToProps, mapDispatchToProps, mergeProps)(LoginConnectable);
