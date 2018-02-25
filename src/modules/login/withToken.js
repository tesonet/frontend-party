import { omit } from 'ramda';
import { connect } from 'react-redux';
import { compose, mapProps } from 'recompose';
import { createStructuredSelector } from 'reselect';
import { getToken } from './ducks';

export default compose(
  connect(
    createStructuredSelector({
      token: getToken,
    }),
  ),
  mapProps(omit(['dispatch'])),
);
