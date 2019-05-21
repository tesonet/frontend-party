
import * as React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import LoginForm from "./LoginForm";

configure({ adapter: new Adapter() });

describe('Login Form', () => {

    it('should render component correctly', () => {
        const mockFn = jest.fn();
        const wrapper = shallow(<LoginForm submit={mockFn} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render form', () => {
        const mockFn = jest.fn();
        const wrapper = shallow(<LoginForm submit={mockFn} />);
        expect(wrapper.find('.login-form').length).toBe(1);
    });

    it('should render username input', () => {
        const mockFn = jest.fn();
        const wrapper = shallow(<LoginForm submit={mockFn} />);
        expect(wrapper.find('.login-username').length).toBe(1);
    });

    it('should render password input', () => {
        const mockFn = jest.fn();
        const wrapper = shallow(<LoginForm submit={mockFn} />);
        expect(wrapper.find('.login-password').length).toBe(1);
    });

    it('should call submit callback', () => {
        const mockFn = jest.fn();
        const wrapper = shallow(<LoginForm submit={mockFn} />);
        wrapper.find('form').simulate('submit', { preventDefault: mockFn });
        expect(mockFn).toHaveBeenCalled();
    });

});