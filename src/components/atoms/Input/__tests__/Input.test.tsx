import React from 'react';
import {shallow} from 'enzyme';
import {Input, IInputProps} from '../Input';

describe('Input', () => {

	const setup = (overrides?: Partial<IInputProps>) => {
		const callback = jest.fn();
		const wrapper = shallow(
			<Input
				name={overrides?.name || 'test'}
				type={overrides?.type || 'password'}
				startAdornment={overrides?.startAdornment}
				endAdornment={overrides?.endAdornment}
				placeholder={overrides?.placeholder || 'test input'}
				errorMessage={overrides?.errorMessage}
				onChange={callback}
			/>
		);
		return {wrapper, callback};
	};

	it('should render component', () => {
		const {wrapper} = setup();
		expect(wrapper.exists('input')).toBe(true);
	});

	it('should have correct name prop', () => {
		const {wrapper} = setup();
		expect(wrapper.find('input').prop('name')).toBe('test');
	});

	it('should have correct type prop', () => {
		const {wrapper} = setup();
		expect(wrapper.find('input').prop('type')).toBe('password');
	});

	it('should have correct placeholder prop', () => {
		const {wrapper} = setup();
		expect(wrapper.find('input').prop('placeholder')).toBe('test input');
	});

	it('should render error message', () => {
		const {wrapper} = setup({errorMessage: 'error'});
		const errorMessage = wrapper.find('[data-qa="errorMessage"]');
		expect(errorMessage.text()).toBe('error');
	});

	it('should render start adornment', () => {
		const {wrapper} = setup({startAdornment: 'start adornment'});
		const startAdornment = wrapper.find('[data-qa="inputAdornment"]');
		expect(startAdornment.text()).toBe('start adornment');
	});

	it('should render end adornment', () => {
		const {wrapper} = setup({endAdornment: 'end adornment'});
		const endAdornment = wrapper.find('[data-qa="inputAdornment"]');
		expect(endAdornment.text()).toBe('end adornment');
	});

	it('should call callback', () => {
		const {wrapper, callback} = setup();
		wrapper.find('input').simulate('change');
		expect(callback).toHaveBeenCalledTimes(1);
	});
});