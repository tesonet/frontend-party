import React from 'react';
import { render } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import ServersTable from './ServersTable';
import '@testing-library/jest-dom/extend-expect';

const mockStore = configureMockStore([thunk]);

describe('ServersTable', () => {
  it('should show loader while servers loading', () => {
    const state = {
      servers: {
        servers: [],
        serversLoading: true,
        serversAuthFailure: false,
        serversGlobalFailure: false,
      },
    };
    const { getByTestId } = render(
      <Provider store={mockStore(state)}><ServersTable /></Provider>,
    );
    const loader = getByTestId('loader');
    expect(loader).toBeVisible();
  });

  it('should show error message if servers fetch failed', () => {
    const state = {
      servers: {
        servers: [],
        serversLoading: false,
        serversAuthFailure: false,
        serversGlobalFailure: true,
      },
    };
    const { getByTestId } = render(
      <Provider store={mockStore(state)}><ServersTable /></Provider>,
    );
    const errorMessage = getByTestId('servers-error');
    expect(errorMessage).toBeVisible();
  });
});
