import React from 'react';
import { render, cleanup } from '@testing-library/react';
import TextField from './TextField';

afterEach(cleanup);

describe('<TextField />', () => {
  test('should set label as placeholder', () => {
    const { getByPlaceholderText } = render(
      <TextField label="First name" onChange={() => {}} value="" />
    );

    expect(getByPlaceholderText('First name')).toBeInTheDocument();
  });
});
