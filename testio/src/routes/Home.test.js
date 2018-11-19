import React from 'react';
import Home from '../routes/Home';
import renderer from 'react-test-renderer';

test('Test rendering of home', () => {
  const component = renderer.create(
    <Home/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

 
});

