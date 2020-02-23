import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import { LocalStorageMock } from '@react-mock/localstorage';
import Auth from './Auth';

afterEach(cleanup);

describe('<Auth />', () => {
  test('should remove token on a mount', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <LocalStorageMock items={{ token: 'token', other: 'other' }}>
          <Auth />
        </LocalStorageMock>
      </Router>
    );

    expect(localStorage.getItem('token')).toBe(null);
    expect(localStorage.getItem('other')).toBe('other');
  });
});
