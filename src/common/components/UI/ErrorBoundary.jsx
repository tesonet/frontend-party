import React from 'react';

import { withDefaultChildrenPropTypes, withChildrenPropTypes } from '../../propTypes';
import Alert from './Alert';
import { errorMessages } from '../../config';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { errorShown: false };
  }

  static getDerivedStateFromError() {
    return { errorShown: true };
  }

  render() {
    const { errorShown } = this.state;

    if (errorShown) {
      return <Alert message={errorMessages.DEFAULT_ERROR} />;
    }

    const { children } = this.props;

    return children;
  }
}

ErrorBoundary.defaultProps = {
  ...withDefaultChildrenPropTypes,
};

ErrorBoundary.propTypes = {
  ...withChildrenPropTypes,
};

export default ErrorBoundary;
