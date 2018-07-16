import React from 'react';
import renderer from 'react-test-renderer';
import SubmitButton from './SubmitButton';

describe('<SubmitButton />', () => {
    it('should match snapshot', () => {
        const component = renderer.create(
            <SubmitButton>
                Log in
            </SubmitButton>
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
