import React from 'react';
import {shallow} from 'enzyme';
import {Button, IButtonProps} from '../Button';

describe('Button', () => {
	const setup = (overrides?: Partial<IButtonProps>) => {
		const callback = jest.fn();
		const wrapper = shallow(
			<Button
				text={overrides?.text || 'Test'}
				type={overrides?.type || 'button'}
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
		expect(wrapper.text()).toBe('Test');
	});

	it('should render correct button type', () => {
		const {wrapper} = setup({type: 'submit'});
		expect(wrapper.find('button').prop('type')).toBe('submit');
	});

	it('should call callback', () => {
		const {wrapper, callback} = setup();
		wrapper.find('button').simulate('click');
		expect(callback).toHaveBeenCalledTimes(1);
	});
});