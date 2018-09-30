import React from 'react';
import Enzyme, { render, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Error from './Error';

Enzyme.configure({ adapter: new Adapter() });

test('Error renders without crashing', () => {
  shallow(<Error />);
});

test('Error renders correct message', () => {
  const message = 'testing';
  const e = render(<Error message={message} />);
  expect(e.html()).toMatchSnapshot();
});
