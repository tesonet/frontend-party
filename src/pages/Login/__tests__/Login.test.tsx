import React from 'react';
import {mount} from 'enzyme';
import {Login} from '../Login';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

const mockStore = configureStore();

describe('LoginPage', () => {
	const setup = (errors = {}) => {
		const store = mockStore({errors});
		const wrapper = mount(
			<Provider store={store}>
				<Login />
			</Provider>
		);
		return {wrapper};
	};

	it('should render component', () => {
		const {wrapper} = setup();
		expect(wrapper.exists('.login')).toBe(true);
	});

	it('should check if logo is rendered', () => {
		const {wrapper} = setup();
		expect(wrapper.exists('.login__logo')).toBe(true);
	});

	it('should render login error message', () => {
		const {wrapper} = setup({isLoginError: true});
		expect(wrapper.exists('.login__error')).toBe(true);
		expect(wrapper.find('.login__error').text()).toBe('Username or password is incorrect.');
	});
});