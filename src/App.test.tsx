import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import App from './App';

describe('App', (): void => {
  it('renders text', (): void => {
    const text = 'Hello World';
    const { getByText } = render(<App />);
    expect(getByText(text)).toBeVisible();
  });
});
