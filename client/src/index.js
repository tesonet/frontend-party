import React from 'react';
import ReactDOM from 'react-dom';
import App, { render } from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
