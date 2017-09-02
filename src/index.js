import React from 'react';
import {render} from 'react-dom';

import App, {init} from './app';


init();


render(<App />, document.getElementById('root'));
