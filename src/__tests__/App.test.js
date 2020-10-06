import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import App from '../App';
import Login from '../pages/login';
import Page404 from '../pages/page404';

const mockStore = configureStore([thunk]);

const initialMocks = mockStore({
	userAuthentication: {
		wrongCredentials: false,
		loginPending: false,
		isLoggedIn: false,
	},
});

describe('<App />', () => {
	test('invalid path should redirect to 404', () => {
		const wrapper = mount(
			<Provider store={initialMocks}>
				<MemoryRouter initialEntries={['/random']}>
					<App />
				</MemoryRouter>
			</Provider>
		);
		expect(wrapper.find(Login)).toHaveLength(0);
		expect(wrapper.find(Page404)).toHaveLength(1);
	});

	test('valid path should not redirect to 404', () => {
		const wrapper = mount(
			<Provider store={initialMocks}>
				<MemoryRouter initialEntries={['/']}>
					<App />
				</MemoryRouter>
			</Provider>
		);
		expect(wrapper.find(Login)).toHaveLength(1);
		expect(wrapper.find(Page404)).toHaveLength(0);
	});
});
