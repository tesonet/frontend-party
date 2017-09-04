import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {compose, mapProps, setPropTypes, lifecycle} from 'recompose';

import {resolveHocParams} from '~/common/hoc';

import * as actions from '../actions';
import {withData} from './';


const withDataLoader = input => compose(
  mapProps(props => ({
    ...props,
    ...resolveHocParams(input, props),
  })),
  setPropTypes({
    name: PropTypes.string.isRequired,
    loader: PropTypes.func.isRequired,
  }),
  connect(
    null,
    (dispath, props) => ({
      loadData() {
        return dispath(actions.loadData(props.name, props.loader));
      },
    }),
  ),
  withData(props => props.name),
  lifecycle({
    componentDidMount() {
      this.props.loadData();
    },
  }),
);

export default withDataLoader;
