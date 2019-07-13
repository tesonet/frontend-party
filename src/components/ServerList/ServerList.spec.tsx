import React from 'react';
import { Provider } from 'react-redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import * as serversService from '../../services/servers.service';
import ServerList from './ServerList';
import { defaultState as serversState } from '../../ducks/servers.duck';
import { defaultState as authState } from '../../ducks/auth.duck';

const middlewares = [promise, thunk];
const mockStore = configureMockStore(middlewares);

const defaultStore = {
    session: { ...authState },
    servers: { ...serversState },
};

const renderServerList = store =>
    render(
        <Provider store={store}>
            <ServerList />
        </Provider>
    );

const getServersSpy = jest.spyOn(serversService, 'get').mockResolvedValue([]);

describe('Server list', () => {
    test('should fetch items on load', () => {
        const store = mockStore(defaultStore);

        renderServerList(store);

        expect(getServersSpy).toBeCalledTimes(1);
    });

    test('should show items', () => {
        const serversMock = [
            { name: 'b', distance: 2 },
            { name: 'a', distance: 1 },
            { name: 'd', distance: 4 },
            { name: 'c', distance: 3 },
        ];

        const store = mockStore({
            ...defaultStore,
            servers: { ...defaultStore.servers, serverList: serversMock },
        });

        const { queryAllByTestId, queryByTestId } = renderServerList(store);

        expect(queryAllByTestId('list-item').length).toEqual(serversMock.length);
        expect(queryByTestId('error')).not.toBeInTheDocument();
        expect(queryByTestId('spinner')).not.toBeInTheDocument();
    });

    test('should show server error', () => {
        const error = 'server error';
        const store = mockStore({
            ...defaultStore,
            servers: { ...defaultStore.servers, errorMessage: error },
        });

        const { getByTestId } = renderServerList(store);

        expect(getByTestId('error')).toBeVisible();
        expect(getByTestId('reload-button')).toBeVisible();
        expect(getByTestId('error')).toHaveTextContent(error);
    });

    test('should reload items on reload click', () => {
        const error = 'server error';
        const store = mockStore({
            ...defaultStore,
            servers: { ...defaultStore.servers, errorMessage: error },
        });

        const { getByTestId } = renderServerList(store);

        fireEvent.click(getByTestId('reload-button'));
        expect(getServersSpy).toBeCalledTimes(2);
    });

    test('should show spinner', () => {
        const store = mockStore({
            ...defaultStore,
            servers: { ...defaultStore.servers, loading: true },
        });

        const { getByTestId } = renderServerList(store);

        expect(getByTestId('spinner')).toBeVisible();
    });
});
