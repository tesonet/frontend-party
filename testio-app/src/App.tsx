import * as React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Button from './components/Buttons/LoginContainer';
import FormInput from './components/Input/Input';
import { IApp } from './types';

import { setLoginInput, setPasswordInput } from './features/loginForm/actions';

import logo from './logo.svg';

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;

type Props = StateProps & DispatchProps;

const App: React.SFC<Props> = ({
  headerText,
  onLoginChange,
  onPasswordChange,
  username,
  usernamePlaceholder,
  password,
  passwordPlaceholder,
  error
}) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">{headerText}</h1>
    </header>
    <p className="App-intro">
      To get started, edit <code>src/App.tsx</code> and save to reload.
    </p>
    {error && <div>error message</div>}
    <FormInput
      onChange={onLoginChange}
      value={username}
      placeholder={usernamePlaceholder}
    />
    <FormInput
      onChange={onPasswordChange}
      value={password}
      placeholder={passwordPlaceholder}
    />
    <Button />
  </div>
);

const usernamePlaceholderText = 'username';
const passwordPlaceholderText = 'password';

const mapStateToProps = (state: IApp) => ({
  error: state.form.error,
  headerText: 'Welcome to React',
  password: state.form.password,
  passwordPlaceholder: passwordPlaceholderText,
  username: state.form.username,
  usernamePlaceholder: usernamePlaceholderText
});

const mapDispatchToProps = (dispatch: any) => ({
  onLoginChange: (value: string) => dispatch(setLoginInput(value)),
  onPasswordChange: (value: string) => dispatch(setPasswordInput(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
