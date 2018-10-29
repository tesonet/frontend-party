import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main';

it('renders correctly', () => {
  const MainPage = renderer
    .create(<Main />)
    .toJSON();
  expect(MainPage).toMatchSnapshot();
});