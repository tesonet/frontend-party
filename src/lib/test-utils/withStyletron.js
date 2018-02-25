import React from 'react';
import PropTypes from 'prop-types';

class StyletronProvider extends React.Component {
  getChildContext() {
    return {
      styletron: { injectRawDeclaration: () => {} },
    };
  }
  render() {
    return this.props.children;
  }
}
StyletronProvider.propTypes = {
  children: PropTypes.node,
};
StyletronProvider.childContextTypes = {
  styletron: PropTypes.object,
};

export default Component => props => (
  <StyletronProvider>
    <Component {...props} />
  </StyletronProvider>
);
