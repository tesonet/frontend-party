import * as React from 'react';

interface IState {
  hasError: boolean;
}

export const withErrorBoundary = <T extends {}>(
  ErrorComponent: React.ComponentType<any>
) => (Component: React.ComponentType<T>) =>
  class extends React.Component<T, IState> {
    public state: IState = { hasError: false };

    public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
      this.setState({ hasError: true });
      // tslint:disable-next-line:no-console
      console.error(error, errorInfo);
    }

    public render() {
      if (this.state.hasError) {
        return <ErrorComponent />;
      }

      return <Component {...this.props} />;
    }
  };
