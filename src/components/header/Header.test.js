import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Enzyme, { render, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header';

Enzyme.configure({ adapter: new Adapter() });

test('Header renders without crashing', () => {
  shallow(<Header />);
});

test('Header renders correct message', () => {
  const e = render(<MemoryRouter><Header /></MemoryRouter>);
  expect(e.html()).toMatchSnapshot();
});
