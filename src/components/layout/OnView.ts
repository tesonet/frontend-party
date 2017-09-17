import * as React from 'react';

interface IOnEnteredProps {
  onDidMount: () => any;
  onWillUnmount: () => any;
  children: any;
}

export default class OnView extends React.Component<IOnEnteredProps, {}> {
  componentDidMount() {
    this.props.onDidMount();
  }

  componentWillUnmount() {
    this.props.onWillUnmount();
  }

  render() {
    return this.props.children;
  }
}
