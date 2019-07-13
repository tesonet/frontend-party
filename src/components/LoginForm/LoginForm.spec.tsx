import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import * as authService from '../../services/auth.service';
import LoginForm from './LoginForm';
import { defaultState } from '../../ducks/auth.duck';

const mockStore = configureMockStore();

describe('Login form', () => {
    test('should render 3 children when passing default props', () => {
        const store = mockStore({ session: { ...defaultState } });
        const { getByTestId } = render(<LoginForm store={store} />);

        expect(getByTestId('login-form').children.length).toEqual(3);
    });

    test('should show server error', () => {
        const error = 'server error';
        const store = mockStore({ session: { ...defaultState, errorMessage: error } });
        const { getByTestId } = render(<LoginForm store={store} />);

        expect(getByTestId('login-form-error')).toBeVisible();
        expect(getByTestId('login-form-error')).toHaveTextContent(error);
    });

    test('should prevent login if values are not valid', () => {
        const loginSpy = jest.spyOn(authService, 'login').mockResolvedValue({});
        const store = mockStore({ session: { ...defaultState } });
        const { getByTestId } = render(<LoginForm store={store} />);

        fireEvent.change(getByTestId('form-input-username'), { target: { value: '' } });
        fireEvent.change(getByTestId('form-input-password'), { target: { value: '' } });
        fireEvent.click(getByTestId('form-button'));

        expect(loginSpy).toBeCalledTimes(0);
    });

    test('should login if values are valid', async () => {
        const loginSpy = jest.spyOn(authService, 'login').mockResolvedValue({});
        const store = mockStore({ session: { ...defaultState } });
        const { getByTestId } = render(<LoginForm store={store} />);

        fireEvent.change(getByTestId('form-input-username'), { target: { value: 'username' } });
        fireEvent.change(getByTestId('form-input-password'), { target: { value: 'password' } });
        fireEvent.click(getByTestId('form-button'));

        expect(loginSpy).toBeCalledTimes(1);
    });
});
