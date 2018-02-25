import { compose, withProps } from 'recompose';
import { Field } from 'redux-form';
import Component from './Component';

export default compose(
  withProps({
    component: Component,
  }),
)(Field);
