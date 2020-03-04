import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import Servers from '../../containers/Servers/Servers';
import { signout } from '../../store/thunk/auth';
import { sortByName } from '../../utility/helpers/sortByName';
import { sortByDistance } from '../../utility/helpers/sortByDistance';

const mockStore = configureMockStore([thunk]);
const fakeServers = [
  { name: 'Germany', distance: '400' },
  { name: 'Lithuania', distance: '40' },
  { name: 'Japan', distance: '4000' },
];
const state = { servers: { loading: false, error: null, servers: fakeServers } };
const stateWithError = { servers: { loading: false, error: 'error', servers: fakeServers } };
const stateWithLoading = { servers: { loading: true, error: null, servers: [] } };

const createStore = state => mockStore(state);

jest.mock('../../store/thunk/auth', () => ({
  signout: jest.fn().mockReturnValue({ type: 'test' }),
}));

jest.mock('../../utility/helpers/sortByName', () => ({
  sortByName: jest.fn().mockReturnValue({ type: 'test' }),
}));

jest.mock('../../utility/helpers/sortByDistance', () => ({
  sortByDistance: jest.fn().mockReturnValue({ type: 'test' }),
}));

const createComponent = store =>
  mount(
    <Provider store={store}>
      <Servers />
    </Provider>
  );

describe('<Servers/> signout', () => {
  it('should call sigout when button clicked', () => {
    const component = createComponent(createStore(state));

    component.find('LogoutButton').simulate('click');

    expect(signout).toHaveBeenCalledTimes(1);
  });
});

describe('<Servers/> Spinner', () => {
  it('should not have <Spinner/>', () => {
    const component = createComponent(createStore(state));
    const spinner = component.find('Spinner');

    expect(spinner.exists()).toBeFalsy();
  });

  it('should have <Spinner/> when loading prop equals true', () => {
    const component = createComponent(createStore(stateWithLoading));
    const spinner = component.find('Spinner');

    expect(spinner.exists()).toBeTruthy();
  });
});

describe('<Servers/> error', () => {
  it('should have 0 <ServersError/>', () => {
    const component = createComponent(createStore(state));
    const error = component.find('ServersError');

    expect(error.exists()).toBeFalsy();
  });

  it('should have <ServersError/> when fetch servers fails', () => {
    const component = createComponent(createStore(stateWithError));
    const error = component.find('ServersError');

    expect(error).toHaveLength(1);
  });
});

describe('<Servers/> table items', () => {
  it('should have 0 <ServersTableItem/> when error', () => {
    const component = createComponent(createStore(stateWithLoading));
    const tableItems = component.find('ServersTableItem');

    expect(tableItems.exists()).toBeFalsy();
  });

  it('should have 3 <ServersTableItem/> when 3 servers given', () => {
    const component = createComponent(createStore(state));
    const tableItems = component.find('ServersTableItem');

    expect(tableItems).toHaveLength(3);
  });
});

describe('<Servers/> sort functions calls', () => {
  it('should call sortByName first with "asce" and then with "desc"', () => {
    const component = createComponent(createStore(state));

    component.find('ServersTableTittle[children="SERVER"]').simulate('click');

    expect(sortByName).toBeCalledWith(fakeServers, 'asce');

    component.find('ServersTableTittle[children="SERVER"]').simulate('click');

    expect(sortByName).toBeCalledWith(fakeServers, 'desc');
  });

  it('should call sortByName first with "asce" and then with "desc"', () => {
    const component = createComponent(createStore(state));

    component.find('ServersTableTittle[children="DISTANCE"]').simulate('click');

    expect(sortByDistance).toBeCalledWith(fakeServers, 'asce');

    component.find('ServersTableTittle[children="DISTANCE"]').simulate('click');

    expect(sortByDistance).toBeCalledWith(fakeServers, 'desc');
  });
});
