import React from 'react';
import renderer from 'react-test-renderer';
import FormInput from './FormInput';
import IconUser from '../../../assets/icons/ico-user.png.png';

describe('<FormInput />', () => {
    it('should match snapshot', () => {
        const component = renderer.create(
            <FormInput
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                value="foo"
                icon={IconUser}
                onChange={() => {}}
            />
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
