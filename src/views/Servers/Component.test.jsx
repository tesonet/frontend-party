import React from 'react';
import renderer from 'react-test-renderer';
import Component from './Component';

const getServers = () => {};

test('Loading indicator', () => {
  const component = renderer.create(
    <Component getServers={getServers} items={[]} loading />,
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Items showing', () => {
  const items = [
    { name: 'c', distance: 200 },
    { name: 'd', distance: 50 },
    { name: 'b', distance: 100 },
    { name: 'e', distance: 40 },
    { name: 'a', distance: 100 },
    { name: 'f', distance: 300 },
  ];
  const component = renderer.create(
    <Component getServers={getServers} items={items} loading={false} />,
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
