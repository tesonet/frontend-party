import React from 'react';
import { render, screen } from '@testing-library/react';

import TableHeadRow from '../../Table/TableHeadRow';

describe('TableHeadRow', () => {
  it('should render', () => {
    const childrenText = 'I am in table head row';

    render(<TableHeadRow>{childrenText}</TableHeadRow>);

    expect(screen.getByText(childrenText)).toBeInTheDocument();
  });
});
