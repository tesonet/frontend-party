import React from 'react';
import { render, screen } from '@testing-library/react';

import Items from '../../Items/Items';
import { useUserAuthentication } from '../../../../hooks';

jest.mock('../../../../hooks/useUserAuthentication');

describe('Items', () => {
  it.each([
    ['should render items for authenticated users', ['Main', 'Logout'], true],
    ['should render items for authenticated users', ['Main', 'Login'], false],
  ])('%s', (description, items, isAuthenticated) => {
    useUserAuthentication.mockImplementation(() => ({
      isAuthenticated,
    }));

    render(<Items isMobileExpanded={false} />);

    items.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });
});
