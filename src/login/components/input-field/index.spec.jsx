import React from 'react';
import { shallow } from 'enzyme';
import { InputField } from '.';

const defaultProps = {
    onChange: jest.fn(),
    placeholder: 'Placeholder',
    value: ''
};

describe.only('Input field', () => {
    it('should render input field', () => {
        const renderedComponent = shallow(<InputField {...defaultProps} />);
        expect(renderedComponent).toMatchSnapshot();
    });
    it('should render input field with error', () => {
        const renderedComponent = shallow(<InputField {...defaultProps} errorMessage="Value cannot be empty" />);
        expect(renderedComponent).toMatchSnapshot();
    });
});
