import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Enzyme, { render, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Logout from './Logout';

Enzyme.configure({ adapter: new Adapter() });

test('Logout renders without crashing', () => {
  shallow(<Logout />);
});

test('Logout renders correct message', () => {
  const e = render(<MemoryRouter><Logout /></MemoryRouter>);
  expect(e.html()).toMatchSnapshot();
});
