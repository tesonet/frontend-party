import * as React from 'react';
import * as Enzyme from 'enzyme';
import {ServerList} from '../';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {IReduxState} from '../../../reducers';

describe('<ServerList />', () => {
  const setup = (initialState: IReduxState = {servers: []}) => {
    const mockStore = configureStore();
    return Enzyme.mount(
      <Provider store={mockStore(initialState)}>
        <ServerList />
      </Provider>
    );
  };

  it('should mount', () => {
    expect(setup().exists()).toBe(true);
  });

  it('should have logout button', () => {
    const wrapper = setup();
    expect(wrapper.find('button').length).toBe(1);
    expect(wrapper.find('button').text()).toBe('Logout');
  });

  it('should render a separate row for each server', () => {
    const wrapper = setup({
      servers: [
        {distance: 1, name: 'server1'},
        {distance: 2, name: 'server2'}
      ]
    });
    expect(wrapper.find('.list .list__row').length).toBe(2);
    expect(wrapper.find('.list .list__row').first().text()).toBe('server11 km');
    expect(wrapper.find('.list .list__row').last().text()).toBe('server22 km');
  });
});
