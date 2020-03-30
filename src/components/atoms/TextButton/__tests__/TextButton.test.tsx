import React from 'react';
import {shallow} from 'enzyme';
import {ITextButtonProps, TextButton} from '../TextButton';

describe('TextButton', () => {
	const setup = (overrides?: Partial<ITextButtonProps>) => {
		const callback = jest.fn();
		const wrapper = shallow(
			<TextButton
				text={overrides?.text || 'Test'}
				startAdornment={overrides?.startAdornment}
				endAdornment={overrides?.endAdornment}
				onClick={overrides?.onClick || callback}
			/>
		);
		return {wrapper, callback};
	};

	it('should render component', () => {
		const {wrapper} = setup();
		expect(wrapper.exists('button')).toBe(true);
	});

	it('should render text', () => {
		const {wrapper} = setup();
		const textWrapper = wrapper.find('[data-qa="textButtonText"]');
		expect(textWrapper.text()).toBe('Test');
	});

	it('should render start adornment', () => {
		const {wrapper} = setup({startAdornment: 'start adornment'});
		const startAdornment = wrapper.find('[data-qa="textButtonAdornment"]');
		expect(startAdornment.text()).toBe('start adornment');
	});

	it('should render end adornment', () => {
		const {wrapper} = setup({endAdornment: 'end adornment'});
		const endAdornment = wrapper.find('[data-qa="textButtonAdornment"]');
		expect(endAdornment.text()).toBe('end adornment');
	});

	it('should call callback', () => {
		const {wrapper, callback} = setup();
		wrapper.find('button').simulate('click');
		expect(callback).toHaveBeenCalledTimes(1);
	});
});