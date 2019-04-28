import * as React from 'react';
import { shallow, mount, render } from 'enzyme';
import ListPage from '../pages/ListPage';

describe('List page', () => {
  it('should render without throwing an error', () => {
    const wrapper = mount(<ListPage/>);
    expect(wrapper.find('.page').length).toBe(1);
  });

  it('should render logout button', () => {
    const wrapper = mount(<ListPage/>);
    expect(wrapper.find('.logout').length).toBe(1);
  });

  it('should render table', () => {
    const wrapper = mount(<ListPage/>);
    expect(wrapper.find('.list__wrap').length).toBe(1);
  });
});
