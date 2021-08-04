import React from 'react';
import { render, screen } from '@testing-library/react';

import TableHead from '../../Table/TableHead';
import {
  ASCENDING,
  DESCENDING,
  DISTANCE,
  NAME,
} from '../../../config/constants';

describe('TableHead', () => {
  it('should render table head', () => {
    const handleSortAction = jest.fn();
    const sortConfig = {
      [NAME]: ASCENDING,
      [DISTANCE]: DESCENDING,
    };

    render(<TableHead handleSortAction={handleSortAction} sortConfig={sortConfig} />);

    expect(screen.getByText('Servers')).toBeInTheDocument();
    expect(screen.getByText('Distance')).toBeInTheDocument();
  });
});
