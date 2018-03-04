import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import ServerList from './ServerList';

describe('ServerList component', () => {
  it('renders without crashing.', () => {
    const div = document.createElement('div');
    render(<ServerList />, div);
    unmountComponentAtNode(div);
  });
});
