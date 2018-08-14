import React from 'react';
import mockApi from '../../../../utils/api';
import { LogoutContainer } from '../LogoutContainer';

jest.mock('../../../../utils/api');

it('renders without crashing', () => {
  const wrapper = shallow(<LogoutContainer />);
  expect(wrapper).toHaveLength(1);
});

it('has reasonable defaultProps', () => {
  expect(LogoutContainer.defaultProps).toEqual({ doLogout: expect.any(Function) });
});

it('calls the doLogout() action', () => {
  const spy = jest.fn();
  shallow(<LogoutContainer doLogout={ spy } />);
  expect(spy).toHaveBeenCalled();
});

it('deletes the token from LocalStorage', () => {
  shallow(<LogoutContainer/>);
  expect(mockApi.setToken).toHaveBeenCalledWith(null);
});
