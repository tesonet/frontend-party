import React from 'react';
import ServersListView from '../partials/ServersListView';
import ServersView, {
  MSG_LIST_EMPTY,
  MSG_LIST_ERROR,
  MSG_LIST_LOADING
} from '../ServersView';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<ServersView />);
});

afterEach(() => {
  wrapper.unmount();
  wrapper = null;
});

it('renders without crashing', () => {
  expect(wrapper).toHaveLength(1);
});

it('has reasonable defaultProps', () => {
  expect(ServersView.defaultProps).toEqual({ isFetching: false, hasError: false, data: null });
});

describe('renders messages', () => {
  it('displays no message by default', () => {
    expect(wrapper.find('.message')).toHaveLength(0);
  });

  it('renders a loading message', () => {
    wrapper.setProps({ isFetching: true });
    expect(wrapper.find('.message')).toHaveLength(1);
    expect(wrapper.find('.message').text()).toContain(MSG_LIST_LOADING);
  });

  it('renders an error message', () => {
    wrapper.setProps({ hasError: true });
    expect(wrapper.find('.message')).toHaveLength(1);
    expect(wrapper.find('.message').text()).toContain(MSG_LIST_ERROR);
  });

  it('renders an empty list message', () => {
    wrapper.setProps({ data: [] });
    expect(wrapper.find('.message')).toHaveLength(1);
    expect(wrapper.find('.message').text()).toContain(MSG_LIST_EMPTY);
  });
});

describe('list rendering', () => {
  it('does not render a list if the data array is empty', () => {
    expect(wrapper.find(ServersListView)).toHaveLength(0);
    wrapper.setProps({ data: [] });
    expect(wrapper.find(ServersListView)).toHaveLength(0);
  });

  it('renders a list if the data array is not empty', () => {
    const data = ['a', 'list'];
    wrapper.setProps({ data });
    expect(wrapper.find(ServersListView)).toHaveLength(1);
    expect(wrapper.find(ServersListView).prop('data')).toEqual(data);
  });
});

describe('data prop helpers', () => {
  it('`hasData` returns `true` if `data` prop is an array', () => {
    expect(wrapper.instance().hasData()).toBe(false);
    wrapper.setProps({ data: [] });
    expect(wrapper.instance().hasData()).toBe(true);
  });

  it('`isDataEmpty` returns `true` if `data` prop array is empty', () => {
    wrapper.setProps({ data: [] });
    expect(wrapper.instance().isDataEmpty()).toBe(true);
  });

  it('`isDataEmpty` returns `false` if `data` prop array is not empty', () => {
    wrapper.setProps({ data: [1, 2, 3] });
    expect(wrapper.instance().isDataEmpty()).toBe(false);
  });
});
