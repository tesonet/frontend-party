import React from 'react';
import { render, screen } from '@testing-library/react';

import TableCell from '../../Table/TableCell';

describe('TableCell', () => {
  it('should render', () => {
    const cellContent = 'cellContent';

    render(<TableCell>{cellContent}</TableCell>);

    expect(screen.getByText(cellContent)).toBeInTheDocument();
  });
});
