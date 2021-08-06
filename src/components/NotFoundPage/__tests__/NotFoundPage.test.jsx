import React from 'react';
import { render, screen } from '@testing-library/react';

import NotFoundPage from '../NotFoundPage';
import { NOT_FOUND_MESSAGE } from '../config/constants';

describe('NotFoundPage', () => {
  it('should render', () => {
    render(<NotFoundPage />);

    expect(screen.getByText(NOT_FOUND_MESSAGE)).toBeInTheDocument();
  });
});
