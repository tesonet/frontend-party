import React from 'react';
import { render, screen } from '@testing-library/react';

import LoginFormContainer from '../LoginFormContainer';

describe('LoginFormContainer', () => {
  it('should render', () => {
    const children = 'children text';

    render(<LoginFormContainer>{children}</LoginFormContainer>);

    expect(screen.getByText(children)).toBeInTheDocument();
  });
});
