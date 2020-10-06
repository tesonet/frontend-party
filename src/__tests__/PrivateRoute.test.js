import React from 'react';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router';
import ServerList from '../pages/serverList';
import PrivateRoute from '../components/PrivateRoute';

const mockStore = configureStore([thunk]);

const initialMocks = mockStore({
	userAuthentication: {
		isLoggedIn: true,
	},
	fetchData: {},
});

describe('<PrivateRoute/>', () => {
	it('renders private component when the user is authorised', () => {
		const privateRoute = mount(
			<Provider store={initialMocks}>
				<MemoryRouter initialEntries={['/servers']}>
					<PrivateRoute path="/servers" component={ServerList} />
				</MemoryRouter>
			</Provider>
		);
		expect(privateRoute.find('ServerList').length).toEqual(1);
	});
});
