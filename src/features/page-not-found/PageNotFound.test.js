import React from 'react';
import Enzyme, { render, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PageNotFound from './PageNotFound';

Enzyme.configure({ adapter: new Adapter() });

test('PageNotFound renders without crashing', () => {
  shallow(<PageNotFound />);
});

test('PageNotFound renders to correct snapshot', () => {
  const e = render(<PageNotFound />);
  expect(e.html()).toMatchSnapshot();
});
