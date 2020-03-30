import React from 'react';
import {mount} from 'enzyme';
import {Header} from '../Header';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Header', () => {
	const setup = () => {
		const store = mockStore();
		store.dispatch = jest.fn();
		const wrapper = mount(
			<Provider store={store}>
				<Header/>
			</Provider>
		);
		return {store, wrapper};
	};

	it('should render component', () => {
		const {wrapper} = setup();
		expect(wrapper.exists('.header')).toBe(true);
	});

	it('should check if logo is rendered', () => {
		const {wrapper} = setup();
		expect(wrapper.exists('.header__logo')).toBe(true);
	});

	it('should call logout button callback', () => {
		const {store, wrapper} = setup();
		const logoutButton = wrapper.find('[data-qa="logoutButton"]');
		logoutButton.simulate('click');
		expect(store.dispatch).toHaveBeenCalledTimes(1);
	});
});