import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import Item from '../../Items/Item';

describe('Item', () => {
  it('should render', () => {
    const label = 'press me';
    const onClick = jest.fn();

    render(<Item onClick={onClick} label={label} />);

    fireEvent.click(screen.getByText(label));

    expect(onClick).toHaveBeenCalled();
  });
});
