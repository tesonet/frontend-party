import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import LoginForm from '../../components/LoginForm/LoginForm';
import authService from '../../services/auth.service';

jest.mock('../../services/auth.service', () => ({login: jest.fn()}));

describe('<Login />', () => {
    it('should render Logo', () => {
        const wrapper = shallow(<Login redirectTo={''} />);
        expect(wrapper.find('img[alt="Logo"]').length).toEqual(1);
    });
    it('should render LoginForm', () => {
        const wrapper = shallow(<Login redirectTo={''} />);
        expect(wrapper.find(LoginForm).length).toEqual(1);
    });
    describe('onFormSubmit', () => {
        it('should call authService.login', () => {
            authService.login.mockImplementation(() => Promise.resolve());
            const wrapper = shallow(<Login redirectTo={''} />);
            wrapper.instance().onFormSubmit();
            expect(authService.login).toHaveBeenCalled;
        });
    });
});