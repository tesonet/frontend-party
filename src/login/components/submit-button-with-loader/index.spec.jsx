import React from 'react';
import { shallow } from 'enzyme';
import { SubmitButtonWithLoader } from '.';

describe('Submit Button', () => {
    it('should render button without loader', () => {
        const props = {
            isAuthenticating: false
        };

        const renderedComponent = shallow(<SubmitButtonWithLoader {...props} />);
        expect(renderedComponent).toMatchSnapshot();
    });

    it('should render button with loader', () => {
        const props = {
            isAuthenticating: true
        };

        const renderedComponent = shallow(<SubmitButtonWithLoader {...props} />);
        expect(renderedComponent).toMatchSnapshot();
    });
});
