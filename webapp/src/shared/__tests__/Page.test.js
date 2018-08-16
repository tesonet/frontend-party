import React from 'react';
import Page from '../Page';

it('renders without crashing', () => {
  const wrapper = shallow(<Page />);
  expect(wrapper).toHaveLength(1);
});

it('has reasonable defaultProps', () => {
  expect(Page.defaultProps).toEqual({
    name: '',
    isInner: true,
    className: 'container-fluid h-100',
    title: 'Testio.',
    children: null
  });
});

it('matches the snapshot', () => {
  const wrapper = shallow(<Page name="my-page" className="my-class"><div>Hello</div></Page>);
  expect(wrapper).toMatchSnapshot();
});
