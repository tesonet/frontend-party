import React from 'react';
import { render, screen } from '@testing-library/react';

import Main from '../Main';
import { useUserAuthentication } from '../../../hooks';
import { LOGGED_IN_MESSAGE, LOGGED_OUT_MESSAGE } from '../config/constants';

jest.mock('../../../hooks/useUserAuthentication');

describe('Main', () => {
  it.each([
    ['should render logged in message', true, LOGGED_IN_MESSAGE],
    ['should render logged out message', false, LOGGED_OUT_MESSAGE],
  ])('%s', (description, isAuthenticated, message) => {
    useUserAuthentication.mockImplementation(() => ({
      isAuthenticated,
    }));

    render(<Main />);

    expect(screen.getByText(message)).toBeInTheDocument();
  });
});
