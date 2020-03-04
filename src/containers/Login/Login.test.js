import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import Login from './Login';
import { auth } from '../../store/thunk/auth';

const mockStore = configureMockStore([thunk]);
const state = { auth: { loading: false, error: null } };
const stateWithError = { auth: { loading: false, error: 'error' } };
const stateWithLoading = { auth: { loading: true, error: null } };

const createStore = state => mockStore(state);

jest.mock('../../store/thunk/auth', () => ({
  auth: jest.fn().mockReturnValue({ type: 'test' }),
}));

const createComponent = store =>
  mount(
    <Provider store={store}>
      <Login />
    </Provider>
  );

describe('<Login/> Required errors', () => {
  it('should have 0 <LoginRequiredError/> when component loaded', () => {
    const component = createComponent(createStore(state));
    const requiredError = component.find('LoginRequiredError');

    expect(requiredError.exists()).toBeFalsy();
  });

  it('should have 2 <LoginRequiredError/> when credentials equals empty strings', () => {
    const component = createComponent(createStore(state));

    component.find('LoginButton').simulate('click');

    const requiredError = component.find('LoginRequiredError');

    expect(requiredError).toHaveLength(2);
  });

  it('should have 1 <LoginRequiredError/> when username is not empty string', () => {
    const component = createComponent(createStore(state));

    component
      .find('LoginInput[placeholder="Username"]')
      .simulate('change', { target: { value: 'Username' } });
    component.find('LoginButton').simulate('click');

    const requiredError = component.find('LoginRequiredError');

    expect(requiredError).toHaveLength(1);
  });

  it('should have 1 <LoginRequiredError/> when password is not empty string', () => {
    const component = createComponent(createStore(state));

    component
      .find('LoginInput[placeholder="Password"]')
      .simulate('change', { target: { value: 'Password' } });
    component.find('LoginButton').simulate('click');

    const requiredError = component.find('LoginRequiredError');

    expect(requiredError).toHaveLength(1);
  });

  it('should have 0 <LoginRequiredError/> when credentials is not empty strings', () => {
    const component = createComponent(createStore(state));

    component
      .find('LoginInput[placeholder="Username"]')
      .simulate('change', { target: { value: 'Username' } });
    component
      .find('LoginInput[placeholder="Password"]')
      .simulate('change', { target: { value: 'Password' } });
    component.find('LoginButton').simulate('click');

    const requiredError = component.find('LoginRequiredError');

    expect(requiredError.exists()).toBeFalsy();
  });
});

describe('<Login/> Auth error', () => {
  it('should have 0 <LoginError/>', () => {
    const component = createComponent(createStore(state));
    const error = component.find('LoginError');

    expect(error.exists()).toBeFalsy();
  });

  it('should have <LoginError/> when login fails', () => {
    const component = createComponent(createStore(stateWithError));
    const error = component.find('LoginError');

    expect(error).toHaveLength(1);
  });
});

describe('<Login/> Spinner', () => {
  it('should not have <Spinner/>', () => {
    const component = createComponent(createStore(state));
    const spinner = component.find('Spinner');

    expect(spinner.exists()).toBeFalsy();
  });

  it('should have <Spinner/> when loading prop equals true', () => {
    const component = createComponent(createStore(stateWithLoading));
    const spinner = component.find('Spinner');

    expect(spinner).toHaveLength(1);
  });
});

describe('<Login/> auth action', () => {
  it('should be called with correct credentials', () => {
    const component = createComponent(createStore(state));

    component
      .find('LoginInput[placeholder="Username"]')
      .simulate('change', { target: { value: 'Username' } });
    component
      .find('LoginInput[placeholder="Password"]')
      .simulate('change', { target: { value: 'Password' } });
    component.find('LoginButton').simulate('click');

    expect(auth).toHaveBeenCalledWith('Username', 'Password');
  });
});
