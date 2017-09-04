import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import store from './Store';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Routes store={store}/>, div);
});
