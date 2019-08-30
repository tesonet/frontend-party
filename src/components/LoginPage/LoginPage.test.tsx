import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom';
import React from 'react';

import LoginPage from './LoginPage';

describe('LoginPage', (): void => {
  it('renders text', (): void => {
    const { getByText } = render(
      <StaticRouter>
        <LoginPage />
      </StaticRouter>
    );
    expect(getByText('testio')).toBeVisible();
  });
});
