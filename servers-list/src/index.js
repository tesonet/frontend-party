import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main';
import {Provider} from 'react-redux';
import store from './store/index';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Provider store={store}><Main /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
