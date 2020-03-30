import React from 'react';
import {shallow} from 'enzyme';
import {Loader} from '../Loader';

describe('Loader', () => {
	const setup = (isLoading = false) => {
		const wrapper = shallow(
			<Loader
				isLoading={isLoading}
			/>
		);
		return {wrapper};
	};

	it('should not render loader', () => {
		const {wrapper} = setup(false);
		expect(wrapper.html()).toBe(null);
	});

	it('should render loader', () => {
		const {wrapper} = setup(true);
		expect(wrapper.exists('.loader')).toBe(true);
	});
});