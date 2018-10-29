import React from 'react';
import renderer from 'react-test-renderer';
import FieldGroup from './FieldGroup';

it('renders correctly', () => {
  const FielGroupComponent = renderer
    .create(<FieldGroup />)
    .toJSON();
  expect(FielGroupComponent).toMatchSnapshot();
});