import React from 'react';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Login from '../pages/login';

const mockStore = configureStore([thunk]);
const historyMock = { push: jest.fn() };

const initialMocks = mockStore({
	userAuthentication: {
		wrongCredentials: false,
		loginPending: false,
		isLoggedIn: false,
	},
});
const wrongCredentialsMocks = mockStore({
	userAuthentication: {
		wrongCredentials: true,
		loginPending: false,
		isLoggedIn: false,
	},
});
const loginPendingMocks = mockStore({
	userAuthentication: {
		wrongCredentials: false,
		loginPending: true,
		isLoggedIn: false,
	},
});
const isLoggedInMocks = mockStore({
	userAuthentication: {
		wrongCredentials: false,
		loginPending: false,
		isLoggedIn: true,
	},
});

describe('<Login />', () => {
	test('displays all text correctly', () => {
		const wrapper = mount(
			<Provider store={initialMocks}>
				<Login />
			</Provider>
		);
		expect(wrapper.text()).toContain('Log In');
		expect(
			wrapper.find('.form__input--username').at(0).props().placeholder
		).toEqual('Username');
		expect(
			wrapper.find('.form__input--password').at(0).props().placeholder
		).toEqual('Password');
	});

	test('renders and matches snapshot', () => {
		const wrapper = mount(
			<Provider store={wrongCredentialsMocks}>
				<Login />
			</Provider>
		);
		expect(toJSON(wrapper.find('form'))).toMatchSnapshot();
	});

	test('redirects to /servers when user logs in', () => {
		const wrapper = mount(
			<Provider store={isLoggedInMocks}>
				<Login history={historyMock} />
			</Provider>
		);
		expect(historyMock.push.mock.calls[0]).toEqual(['/servers']);
	});

	test('displays warn if user havent typed anything in input', () => {
		const wrapper = mount(
			<Provider store={initialMocks}>
				<Login />
			</Provider>
		);
		wrapper.find('.form').simulate('submit');
		expect(wrapper.text()).toContain('Please enter your username');
		expect(wrapper.text()).toContain('Please enter your password');
	});

	test('displays warn message when credentials are incorrect', () => {
		const wrapper = mount(
			<Provider store={wrongCredentialsMocks}>
				<Login />
			</Provider>
		);
		expect(wrapper.text()).toContain('Incorrect username or password');
	});

	test('hides Log In text on button when authentication is pending', () => {
		const wrapper = mount(
			<Provider store={loginPendingMocks}>
				<Login />
			</Provider>
		);
		expect(wrapper.text()).not.toContain('Log In');
	});
});
