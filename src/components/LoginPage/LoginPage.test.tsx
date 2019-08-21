import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';

import LoginPage from './LoginPage';

describe('LoginPage', (): void => {
  it('renders text', (): void => {
    const { getByText } = render(<LoginPage />);
    expect(getByText('testio')).toBeVisible();
  });
});
