import * as React from 'react';

interface OptionalProps {
  renderIf: boolean;
  component?: () => React.ReactNode;
}

export class Optional extends React.Component<OptionalProps> {
  render() {
    const { children, component, renderIf } = this.props;
    return renderIf ? (!!component ? component() : children) : null;
  }
}
