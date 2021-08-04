import React from 'react';
import { screen, render } from '@testing-library/react';

import Logo from '../Logo';

describe('Logo', () => {
  it('should render', () => {
    render(<Logo />);

    expect(screen.getByText('TesoServers')).toBeInTheDocument();
  });
});
