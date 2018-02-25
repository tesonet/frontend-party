import React from 'react';
import PropTypes from 'prop-types';

const noop = () => {};
const getNull = () => null;

class ReduxStoreProvider extends React.Component {
  getChildContext() {
    return {
      store: { subscribe: noop, dispatch: noop, getState: getNull },
    };
  }
  render() {
    return this.props.children;
  }
}
ReduxStoreProvider.propTypes = {
  children: PropTypes.node,
};
ReduxStoreProvider.childContextTypes = {
  store: PropTypes.object,
};

export default Component => props => (
  <ReduxStoreProvider>
    <Component {...props} />
  </ReduxStoreProvider>
);
