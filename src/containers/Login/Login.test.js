import * as React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Login from "./Login";
import TokenService from '../../services/TokenService'

configure({ adapter: new Adapter() });
jest.mock('../../services/TokenService', () => ({ GetToken: jest.fn() }));

describe('Login page', () => {
    it('should render page correctly', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render page logo', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('.login-logo').length).toEqual(1);
    });

    it('should render login form', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('LoginForm').length).toEqual(1);
    });

    it('should call TokenService.GetToken on form submit', () => {
        const wrapper = shallow(<Login />);
        wrapper.handleSubmit = jest.fn();
        wrapper.update();
        wrapper.handleSubmit();
        expect(TokenService.GetToken).toHaveBeenCalled;
    });

});