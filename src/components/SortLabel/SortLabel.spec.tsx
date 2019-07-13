import React from 'react';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import SortLabel from './SortLabel';
import { defaultState as serversState, actions as serverActions } from '../../ducks/servers.duck';

const middlewares = [thunk, promise];
const mockStore = configureMockStore(middlewares);

const setSortSpy = jest.spyOn(serverActions, 'setSortParams');

describe('Sort label', () => {
    test('should sort params', () => {
        const store = mockStore({ servers: { ...serversState } });
        const { getByTestId } = render(<SortLabel store={store} />);

        fireEvent.click(getByTestId('container'));
        expect(setSortSpy).toBeCalledTimes(1);
    });

    test('should show label', () => {
        const label = 'test label';
        const store = mockStore({ servers: { ...serversState } });
        const { container } = render(<SortLabel store={store} label={label} />);

        expect(container).toHaveTextContent(label);
    });

    test('should show inactive arrows on empty params', () => {
        const store = mockStore({ servers: { ...serversState } });
        const { getByTestId } = render(<SortLabel store={store} sortKey="test" />);

        expect(getByTestId('arrow-up')).toHaveStyle('opacity: 0.4');
        expect(getByTestId('arrow-down')).toHaveStyle('opacity: 0.4');
    });

    test('should show active arrow-up on ascending order', () => {
        const store = mockStore({ servers: { ...serversState, sortParams: { key: 'test', order: 'asc' } } });
        const { getByTestId } = render(<SortLabel store={store} sortKey="test" />);

        expect(getByTestId('arrow-up')).toHaveStyle('opacity: 1');
        expect(getByTestId('arrow-down')).toHaveStyle('opacity: 0.4');
    });

    test('should show active arrow-down on descending order', () => {
        const store = mockStore({ servers: { ...serversState, sortParams: { key: 'test', order: 'desc' } } });
        const { getByTestId } = render(<SortLabel store={store} sortKey="test" />);

        expect(getByTestId('arrow-up')).toHaveStyle('opacity: 0.4');
        expect(getByTestId('arrow-down')).toHaveStyle('opacity: 1');
    });
});
