import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import withReduxStore from './withReduxStore';

const noop = () => {};
const getNull = () => null;

class ReduxFormProvider extends React.Component {
  getChildContext() {
    return {
      _reduxForm: {
        register: noop,
        unregister: noop,
        getValues: getNull,
        getFormState: getNull,
      },
    };
  }
  render() {
    return this.props.children;
  }
}
ReduxFormProvider.propTypes = {
  children: PropTypes.node,
};
ReduxFormProvider.childContextTypes = {
  _reduxForm: PropTypes.object,
};

export default Component =>
  compose(withReduxStore)(props => (
    <ReduxFormProvider>
      <Component {...props} />
    </ReduxFormProvider>
  ));
