import React from 'react';
import PropTypes from 'prop-types';

class AsyncComponent extends React.Component {
  static propTypes = {
    load: PropTypes.func.isRequired,
  };

  state = { component: null };

  componentDidMount() {
    this.props.load().then(({ default: component }) => {
      this.setState({ component });
    });
  }

  render() {
    const { component: Component } = this.state;
    const { load, ...props } = this.props;
    return Component ? <Component {...props} /> : null;
  }
}

export default importComponent => props => (
  <AsyncComponent load={importComponent} {...props} />
);
