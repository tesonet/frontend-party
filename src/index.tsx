
// styles
import './scss/style.scss';

// react and react dependencies
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// components

export default class App extends React.Component {
  render() {
    return <h1>Testio</h1>
  }
}

ReactDOM.render(<App />, document.getElementById('app') as HTMLElement);
