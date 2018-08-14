import React from 'react';
import ServersListView from './ServersListView';
import ServersListItemView from './ServersListItemView';
import servers from '../../../../__fixtures__/servers';

it('renders without crashing', () => {
  const wrapper = shallow(<ServersListView />);
  expect(wrapper).toHaveLength(1);
});

it('has reasonable defaultProps', () => {
  expect(ServersListView.defaultProps).toEqual({ data: [] });
});

it("won't render without any data", () => {
  const wrapper = shallow(<ServersListView />);
  expect(wrapper.type()).toBeNull();
});

describe('given data', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ServersListView data={ servers } />);
  });

  afterEach(() => {
    wrapper.unmount();
    wrapper = null;
  });

  it('renders a list header', () => {
    const headerWrapper = wrapper.find('header');
    expect(headerWrapper).toHaveLength(1);
    expect(headerWrapper.text().length).toBeGreaterThan(0);
  });

  it('renders a list of <ServersListItemView />', () => {
    const listItemWrappers = wrapper.find(ServersListItemView);
    const firstItemWrapper = listItemWrappers.first();
    const lastItemWrapper = listItemWrappers.last();

    const firstData = servers[0];
    const lastData = servers[servers.length - 1];

    expect(listItemWrappers.length).toBeGreaterThan(0);
    expect(firstItemWrapper.props()).toEqual({ ...firstData, unit: 'km' });
    expect(lastItemWrapper.props()).toEqual({ ...lastData, unit: 'km' });
  });
});
