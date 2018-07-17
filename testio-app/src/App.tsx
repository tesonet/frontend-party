import * as React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Button from './components/Button/ButtonContainer';
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
  password
}) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">{ headerText }</h1>
    </header>
    <p className="App-intro">
      To get started, edit <code>src/App.tsx</code> and save to reload qweproqwerpiqwe poriqwperi qwpeirp qwierpqiwerpiqwepr. 
    </p>
    <FormInput onChange={onLoginChange} value={ username } />
    <FormInput onChange={onPasswordChange} value={ password } />
    <Button />
  </div>
);

const mapStateToProps = (state: IApp) => ({
  headerText: 'Welcome to React',
  password: state.form.password,
  username: state.form.username
})

const mapDispatchToProps = (dispatch: any) => ({
  onLoginChange: (value: string) => dispatch(setLoginInput(value)),
  onPasswordChange: (value: string) => dispatch(setPasswordInput(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);