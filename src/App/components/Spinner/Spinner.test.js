import React from 'react';
import renderer from 'react-test-renderer';
import Spinner from './Spinner';

it('renders correctly small Spinner', () => {
  const SpinnerComponent = renderer
    .create(<Spinner size="small" />)
    .toJSON();
  expect(SpinnerComponent).toMatchSnapshot();
});

it('renders correctly large Spinner', () => {
  const SpinnerComponent = renderer
    .create(<Spinner size="large" />)
    .toJSON();
  expect(SpinnerComponent).toMatchSnapshot();
});