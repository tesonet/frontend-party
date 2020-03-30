import React from 'react';
import {shallow} from 'enzyme';
import {PrivateRoute} from '../PrivateRoute';
import {LOGIN} from '../../../../utils/routes';

function TestComponent() {
	return <div className='test'>Test</div>;
}

describe('PrivateRoute', () => {
	const setup = (props?: any) => {
		const wrapper = shallow(
			<PrivateRoute
				{...props}
				component={TestComponent}
			/>
		);
		return {wrapper};
	};

	it('should not render component', () => {
		jest.spyOn(Object.getPrototypeOf(window.localStorage), 'getItem')
			.mockImplementationOnce(() => '1111');
		const {wrapper} = setup();
		expect(wrapper.shallow().exists('.test')).toBe(true);
	});

	it('should pass props to component', () => {
		jest.spyOn(Object.getPrototypeOf(window.localStorage), 'getItem')
			.mockImplementationOnce(() => '1111');
		const {wrapper} = setup({path: '/servers'});
		expect(wrapper.prop('path')).toBe('/servers');
	});

	it('should render redirect component', () => {
		const {wrapper} = setup();
		expect(wrapper.shallow().exists('.test')).toBe(false);
		expect(wrapper.prop('to')).toBe(LOGIN);
		expect(wrapper.prop('noThrow')).toBe(true);
	});
});