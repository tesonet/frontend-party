import React from 'react';
import renderer from 'react-test-renderer';
import IconLabel from './IconLabel';
import IconLogout from '../../../assets/icons/ico-logout.png';

describe('<IconLabel />', () => {
    it('should match snapshot', () => {
        const component = renderer.create(
            <IconLabel icon={IconLogout} onClick={() => {}}>Logout</IconLabel>
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
