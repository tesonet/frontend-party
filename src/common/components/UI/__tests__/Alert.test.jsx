import React from 'react';
import { render, screen } from '@testing-library/react';

import Alert from '../Alert';

describe('Alert', () => {
  it('should render', () => {
    const message = 'test message';

    render(<Alert hideAlert={jest.fn()} message={message} />);

    expect(screen.getByText(message)).toBeInTheDocument();
  });
});
