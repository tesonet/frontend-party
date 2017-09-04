import {connect} from 'react-redux';

import {resolveHocParams} from '~/common/hoc';

import * as selectors from '../selectors';


const withData = input => connect(
  (state, props) => {
    const name = resolveHocParams(input, props);
    return {
      isLoading: selectors.isLoading(state, name),
      hasLoaded: selectors.hasLoaded(state, name),
      data: selectors.data(state, name),
    };
  },
);

export default withData;
