import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';

import Form from './Form';

describe('Form', (): void => {
  it('renders', (): void => {
    const { getByText } = render(<Form />);
    expect(getByText('Log In')).toBeVisible();
  });
});
