import React from 'react';
import renderer from 'react-test-renderer';
import { Button, Input } from '../components/ui';
import { ServerRow } from '../components/servers';
import { LoginForm } from '../components/login';

test('Basic button renders without crash', () => {
  const component = renderer.create(
    <Button onClick={() => console.log('I was clicked')}/>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the onClick
  tree.props.onClick();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Basic Input renders without crash', () => {
  const component = renderer.create(
    <Input />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Basic ServerRow renders without crash', () => {
  const component = renderer.create(
    <ServerRow />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Basic LoginForm renders without crash', () => {
  const component = renderer.create(
    <LoginForm onSubmit={() => console.log('Submit clicked')} />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
