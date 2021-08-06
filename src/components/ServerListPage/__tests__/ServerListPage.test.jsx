import React from 'react';
import { render, screen } from '@testing-library/react';

import ServerListPage from '../ServerListPage';
import {
  DISTANCE,
  NAME,
  NO_SERVERS_MESSAGE,
  initialSortConfig,
} from '../config/constants';
import { useFetchServers, useSortServers } from '../hooks';

import { unsortedServers } from '../__mocks__/servers';

jest.mock('../hooks', () => ({
  useFetchServers: jest.fn(),
  useSortServers: jest.fn(),
}));

const mockHooks = (servers) => {
  useFetchServers.mockImplementation(() => ({
    servers,
    serversLoaded: true,
  }));

  useSortServers.mockImplementation(() => ({
    sortConfig: initialSortConfig,
    handleSortAction: jest.fn(),
  }));
};

describe('ServerListPage', () => {
  it('should render servers', () => {
    mockHooks(unsortedServers);

    render(<ServerListPage />);

    unsortedServers.forEach((server) => {
      expect(screen.getByText(server[NAME])).toBeInTheDocument();
      expect(screen.getByText(server[DISTANCE])).toBeInTheDocument();
    });
  });

  it('should render no servers message', () => {
    mockHooks([]);

    render(<ServerListPage />);

    expect(screen.getByText(NO_SERVERS_MESSAGE)).toBeInTheDocument();
  });
});
