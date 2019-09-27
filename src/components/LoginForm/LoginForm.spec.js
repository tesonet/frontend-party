import React from 'react';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as apis from '../../api/teso';
import LoginForm from './LoginForm';
import FormErrorMessage from '../FormErrorMessage/FormErrorMessage';
import { INITIAL_STATE } from '../../reducers/login';

describe('Login Form', () => {
    let wrapper;
    let store;
    let tokenFetchSpy;
    let historyMock;
    const mockStore = configureMockStore([thunk]);

    beforeAll(() => {
        historyMock = { push: jest.fn() };
        tokenFetchSpy = jest.spyOn(apis, 'getUserToken').mockResolvedValue({});
        store = mockStore({ login: { ...INITIAL_STATE } });
        wrapper = mount(<LoginForm history={historyMock} store={store} />);
    });

    afterEach(() => {
        tokenFetchSpy.mockClear();
    });

    describe('on login attempt', () => {
        it('should login user successfully if credentials are correct', () => {
            const usernameInput = wrapper.find({ name: 'username' });
            const passwordInput = wrapper.find({ name: 'password' });
            const formElement = wrapper.find('.login-form');

            usernameInput.simulate('change', { target: { name: 'username', value: 'username' } });
            passwordInput.simulate('change', { target: { name: 'password', value: 'password' } });
            formElement.simulate('submit');

            expect(tokenFetchSpy).toHaveBeenCalledTimes(1);
        });

        it('should display server and input errors when it exists', () => {
            store = mockStore({ login: { ...INITIAL_STATE, errorType: 'error' } });
            wrapper.setProps({ store });

            const usernameInput = wrapper.find({ name: 'username' });
            const passwordInput = wrapper.find({ name: 'password' });
            const formElement = wrapper.find('.login-form');

            usernameInput.simulate('change', { target: { name: 'username', value: 'username' } });
            passwordInput.simulate('change', { target: { name: 'password', value: 'password' } });
            formElement.simulate('submit');

            expect(usernameInput.hasClass('login-form__input--error')).toBe(true);
            expect(passwordInput.hasClass('login-form__input--error')).toBe(true);
            expect(wrapper.find(FormErrorMessage).exists()).toBe(true);
            expect(tokenFetchSpy).toHaveBeenCalledTimes(1);
        });

        it('should display input errors and prevent login when values are empty', () => {
            const usernameInput = wrapper.find({ name: 'username' });
            const passwordInput = wrapper.find({ name: 'password' });
            const formElement = wrapper.find('.login-form');

            usernameInput.simulate('change', { target: { name: 'username', value: '' } });
            passwordInput.simulate('change', { target: { name: 'password', value: '' } });
            formElement.simulate('submit');

            expect(usernameInput.hasClass('login-form__input--error')).toBe(true);
            expect(passwordInput.hasClass('login-form__input--error')).toBe(true);
            expect(wrapper.find(FormErrorMessage).exists()).toBe(true);
            expect(tokenFetchSpy).toHaveBeenCalledTimes(0);
        });

        it('should display spinner when loading', () => {
            store = mockStore({ login: { ...INITIAL_STATE, loading: true } });
            wrapper.setProps({ store });

            expect(wrapper.find('.login-form__spinner').exists()).toBe(true);
        });
    });
});
