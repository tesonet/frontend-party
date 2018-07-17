import * as React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { testAction } from './features/loginForm/actions';

import logo from './logo.svg';

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;

type Props = StateProps & DispatchProps;

const App: React.SFC<Props> = ({ headerText, onChange }) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">{ headerText }</h1>
    </header>
    <p className="App-intro">
      To get started, edit <code>src/App.tsx</code> and save to reload qweproqwerpiqwe poriqwperi qwpeirp qwierpqiwerpiqwepr. 
    </p>
    <input onChange={onChange}/>
  </div>
);

const mapStateToProps = (state: any) => ({
  headerText: 'Welcome to React'
})

const mapDispatchToProps = (dispatch: any) => ({
  onChange: () => dispatch(testAction('q'))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);