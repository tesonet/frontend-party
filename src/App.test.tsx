import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import App from './App';
import { Login } from './components/Login';
import { Servers } from './components/Servers';

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
      const wrapper = build('/');
      expect(wrapper.find(Login)).toHaveLength(1);
    });
    it('Renders a servers page', () => {
      const wrapper = build('/servers');
      expect(wrapper.find(Servers)).toHaveLength(1);
    });
  });
});
