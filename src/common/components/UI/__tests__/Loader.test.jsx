import React from 'react';
import { render, screen } from '@testing-library/react';

import Loader from '../Loader';

describe('Loader', () => {
  it('should render children and show loader', () => {
    const childrenElement = 'This component is loaded';

    const { container } = render(<Loader loaded={false}>{childrenElement}</Loader>);

    expect(screen.getByText(childrenElement)).toBeInTheDocument();
    expect(container.firstChild).toHaveClass('Loader');
  });
});
