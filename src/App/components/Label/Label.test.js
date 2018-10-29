import React from 'react';
import renderer from 'react-test-renderer';
import Label from './Label';

it('renders correctly small label', () => {
  const LabelComponent = renderer
    .create(<Label size="small" />)
    .toJSON();
  expect(LabelComponent).toMatchSnapshot();
});

it('renders correctly large label', () => {
  const LabelComponent = renderer
    .create(<Label size="large" />)
    .toJSON();
  expect(LabelComponent).toMatchSnapshot();
});