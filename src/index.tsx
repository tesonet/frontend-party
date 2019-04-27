
// styles
import './scss/style.scss';
// react and react dependencies
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// pages
import LoginPage from './pages/LoginPage';
import ListPage from './pages/ListPage';

export default class App extends React.Component {
  render() {
    return (
      <ListPage />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app') as HTMLElement);
