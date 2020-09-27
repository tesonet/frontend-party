import React from 'react';
import { shallow } from 'enzyme';
import LogoutButton from '../LogoutButton';

describe('LogoutButton', () => {
    it('action gets called', () => {
        const mockFunction = jest.fn();
        const wrapper = shallow(<LogoutButton action={mockFunction} />);
        const button = wrapper.find('.logout-button');

        expect(button).toHaveLength(1);
        button.simulate('click');
        expect(mockFunction).toHaveBeenCalled();
    });
});
