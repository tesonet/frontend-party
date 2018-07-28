import React from 'react';
import ServersContainer from './ServersContainer';
import ServersView from './ServersView';
import mockApi from '../../utils/api';
import servers from '../../tests/fixtures/servers';

jest.mock('../../utils/api');

let wrapper;

beforeEach(() => {
  wrapper = shallow(<ServersContainer />);
});

afterEach(() => {
  wrapper.unmount();
  wrapper = null;
});

it('renders without crashing', () => {
  expect(wrapper).toHaveLength(1);
});

it('renders <ServersView />', () => {
  expect(wrapper.find(ServersView)).toHaveLength(1);
});

describe('loading the data', () => {
  beforeEach(() => {
    jest.spyOn(ServersContainer.prototype, 'componentDidMount');
    jest.spyOn(ServersContainer.prototype, 'loadData');
  });

  afterEach(() => {
    ServersContainer.prototype.loadData.mockRestore();
    ServersContainer.prototype.componentDidMount.mockRestore();
  });

  it('attempts to load the data', () => {
    shallow(<ServersContainer />);
    expect(ServersContainer.prototype.loadData).toHaveBeenCalledTimes(1);
  });

  it('fetches the data and passes it along to the view', () => {
    mockApi.servers.get.mockImplementationOnce(() => Promise.resolve(servers));
    ServersContainer.prototype.componentDidMount.mockImplementationOnce(function() {});

    const wrapper = shallow(<ServersContainer />);

    expect(wrapper.find(ServersView).props()).toEqual({
      data: null, isFetching: true, hasError: false
    });

    return wrapper.instance().loadData().then(() => {
      wrapper.update();
      expect(wrapper.find(ServersView).props()).toEqual({
        data: servers, isFetching: false, hasError: false
      });
    });
  });

  it('fetches the data and handles the errors', () => {
    mockApi.servers.get.mockImplementationOnce(() => Promise.reject({}));
    ServersContainer.prototype.componentDidMount.mockImplementationOnce(function() {});

    const wrapper = shallow(<ServersContainer />);

    expect(wrapper.find(ServersView).props()).toEqual({
      data: null, isFetching: true, hasError: false
    });

    return wrapper.instance().loadData().then(() => {
      wrapper.update();
      expect(wrapper.find(ServersView).props()).toEqual({
        data: null, isFetching: false, hasError: true
      });
    });
  });
});
