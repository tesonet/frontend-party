import React from 'react';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import ServerList from '../pages/serverList';

const mockStore = configureStore([thunk]);

const initialMocks = mockStore({
	fetchData: {
		servers: [],
		fetchDataError: false,
	},
});

describe('<ServerList/>', () => {
	test('displays splash screen while loading serverList', () => {
		const wrapper = mount(
			<Provider store={initialMocks}>
				<ServerList />
			</Provider>
		);
		const SplashScreen = wrapper.find('SplashScreen');
		expect(SplashScreen.exists()).toBe(true);
	});
});
