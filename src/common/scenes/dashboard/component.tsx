import Header from 'common/components/header/component';
import ServerList from 'common/components/server-list';
import { noop } from 'common/utils/noop';
import * as React from 'react';

interface IProps {
  onDidMount?: () => any;
}

class Home extends React.Component<IProps> {
  public static defaultProps: Partial<IProps> = { onDidMount: noop };

  public componentDidMount() {
    this.props.onDidMount!();
  }

  public render() {
    return (
      <>
        <Header />
        <ServerList />
      </>
    );
  }
}

export default Home;
