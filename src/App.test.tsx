import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import App from './App';
import { ROUTES } from './routes';
import { Login } from './components/Login';

const build = (path: string) => {
  return mount(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  );
};

describe('App', () => {
  describe('Routes', () => {
    it('Renders a login page', () => {
      const wrapper = build(ROUTES.login);
      expect(wrapper.find(Login)).toHaveLength(1);
    });
  });
});
