import * as React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { App } from './components/App';

render(<App />, document.getElementById('app') || document.createElement('div'));
