import React from 'react';
import { shallow } from 'enzyme';
import { LogoutButton } from '.';

describe('Logout Button', () => {
    it('should render loader', () => {
        const renderedComponent = shallow(<LogoutButton onClick={jest.fn()} />);
        expect(renderedComponent).toMatchSnapshot();
    });
});
