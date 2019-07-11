import React from 'react';
import { render } from '@hot-loader/react-dom';
import Root from './components/Root/Root';
import globalStore from './store';
import { tokenToStorageSync } from './utils/sync';

tokenToStorageSync(globalStore);

render(<Root store={globalStore} />, document.getElementById('root'));
