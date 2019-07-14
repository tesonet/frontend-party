import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { defaultState } from '../../ducks/auth.duck';

const mockStore = configureMockStore();
const Test = () => <div data-testid="test" />;

describe('Private route', () => {
    test('should render provided component if token exists', () => {
        const store = mockStore({ session: { ...defaultState, token: '1' } });
        const { queryByTestId } = render(
            <BrowserRouter>
                <PrivateRoute store={store} component={Test} />
            </BrowserRouter>
        );

        expect(queryByTestId('test')).toBeInTheDocument();
    });

    test('should not render provided component if token does not exist', () => {
        const store = mockStore({ session: { ...defaultState } });
        const { queryByTestId } = render(
            <BrowserRouter>
                <PrivateRoute store={store} component={Test} />
            </BrowserRouter>
        );

        expect(queryByTestId('test')).not.toBeInTheDocument();
    });
});
