import React from 'react';
import tokens from '../../../tests/fixtures/tokens';
import mockApi from '../../../utils/api';
import { ROUTE_PATH as serversRoute } from '../../Servers/ServersContainer';
import LoginContainer, {
  MSG_ERROR_GLOBAL,
  MSG_ERROR_PASSWORD_EMPTY,
  MSG_ERROR_USERNAME_EMPTY
} from './LoginContainer';

jest.mock('../../../utils/api');

it('renders without crashing', () => {
  const wrapper = shallow(<LoginContainer />);
  expect(wrapper).toHaveLength(1);
});

describe('validate()', () => {
  it('returns `null` given correct values', () => {
    const wrapper = shallow(<LoginContainer />);
    wrapper.setState({ username: 'username', password: 'password' });
    expect(wrapper.instance().validate()).toBeNull();
  });

  it('returns errors given incorrect values', () => {
    const wrapper = shallow(<LoginContainer />);
    wrapper.setState({ username: '', password: '' });

    const errors = wrapper.instance().validate();
    expect(errors).toHaveProperty('username', MSG_ERROR_USERNAME_EMPTY);
    expect(errors).toHaveProperty('password', MSG_ERROR_PASSWORD_EMPTY);
  });
});

describe('onChange()', () => {
  it('updates values in the state', () => {
    const wrapper = shallow(<LoginContainer />);
    wrapper.setState({ username: '', password: '' });

    const usernameEvent = { target: { name: 'username', value: 'my_value' } };
    wrapper.instance().onChange(usernameEvent);
    expect(wrapper.state('username')).toBe(usernameEvent.target.value);

    const passwordEvent = { target: { name: 'password', value: 'my_value' } };
    wrapper.instance().onChange(passwordEvent);
    expect(wrapper.state('password')).toBe(passwordEvent.target.value);
  });

  it('validates the input', () => {
    const wrapper = shallow(<LoginContainer />);

    wrapper.setState({ errors: null, username: '' });
    jest.spyOn(wrapper.instance(), 'validate');

    const errors = { username: 'Error' };
    const noErrors = null;
    const usernameEvent = { target: { name: 'username', value: 'my_value' } };

    wrapper.instance().validate.mockImplementationOnce(() => errors);
    wrapper.instance().onChange(usernameEvent);
    expect(wrapper.state('errors')).toEqual(errors);

    wrapper.instance().validate.mockImplementationOnce(() => noErrors);
    wrapper.instance().onChange(usernameEvent);
    expect(wrapper.state('errors')).toBeNull();
  });
});

describe('onSubmit()', () => {
  it('sets the `hasSubmitted` flag to true', () => {
    const wrapper = shallow(<LoginContainer />);
    wrapper.setState({ hasSubmitted: false });
    wrapper.instance().onSubmit();
    expect(wrapper.state('hasSubmitted')).toBe(true);
  });

  it('validates the input', () => {
    const wrapper = shallow(<LoginContainer />);

    wrapper.setState({ errors: null, username: '' });
    jest.spyOn(wrapper.instance(), 'validate');

    const errors = { username: 'Error' };
    const noErrors = null;

    wrapper.instance().validate.mockImplementationOnce(() => errors);
    wrapper.instance().onSubmit();
    expect(wrapper.state('errors')).toEqual(errors);
    expect(wrapper.state('isBusy')).toBe(false);

    wrapper.instance().validate.mockImplementationOnce(() => noErrors);
    wrapper.instance().onSubmit();
    expect(wrapper.state('errors')).toBeNull();
    expect(wrapper.state('isBusy')).toBe(true);
  });

  it('fetches the data successfully', () => {
    mockApi.tokens.post.mockImplementationOnce(() => Promise.resolve(tokens));

    const updateAuthToken = jest.fn();
    const historyMock = { replace: jest.fn() };
    const input = { username: 'my_username', password: 'my_password' };
    const wrapper = shallow(<LoginContainer history={ historyMock } updateAuthToken={ updateAuthToken } />);

    wrapper.setState(input);

    return wrapper.instance().onSubmit().then(() => {
      wrapper.update();
      expect(mockApi.tokens.post).toHaveBeenCalledWith(input.username, input.password);
      expect(updateAuthToken).toHaveBeenCalledWith(tokens.token);
      expect(historyMock.replace).toHaveBeenCalledWith(serversRoute);
      expect(wrapper.state('isBusy')).toBe(false);
    });
  });

  it('encounters an API error', () => {
    mockApi.tokens.post.mockImplementationOnce(() => Promise.reject({}));

    const wrapper = shallow(<LoginContainer />);
    const input = { username: 'my_username', password: 'my_password' };

    wrapper.setState(input);

    return wrapper.instance().onSubmit().then(() => {
      wrapper.update();

      expect(wrapper.state()).toMatchObject({
        isBusy: false,
        globalError: MSG_ERROR_GLOBAL
      });
    });
  });
});
