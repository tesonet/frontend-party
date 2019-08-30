import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';

import Form from './Form';
import { StaticRouter } from 'react-router';

describe('Form', (): void => {
  it('renders', (): void => {
    const { getByText } = render(
      <StaticRouter>
        <Form />
      </StaticRouter>
    );
    expect(getByText('Log In')).toBeVisible();
  });
});
