import React from 'react';
import renderer from 'react-test-renderer';
import ServerRow from '../ServerRow';

test('Server list header row', () => {
  const component = renderer.create(
    <ServerRow isHeader item={{ name: 'header' }} />,
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Server list value row', () => {
  const component = renderer.create(
    <ServerRow item={{ name: 'value', distance: 123 }} />,
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
