import * as React from 'react';
import { IServersTableState, IServer } from '../../interfaces';
import logout from '../../utils/logout';
import { apiGetServers } from '../../api';
import sorting from '../../utils/sorting';

class ServersTable extends React.Component<React.HTMLProps<HTMLElement>, IServersTableState> {
  constructor(props: React.HTMLProps<HTMLElement>) {
    super(props);

    this.state = {
      servers: null
    };
  }

  public render() {
    const { className } = this.props;
    const { servers } = this.state;

    const tableBody = servers ? (
      <div className="table__body">
        { servers.map((server: IServer, i: number) => (
          <div className="table__row container-fluid" key={i}>
            <div className="table__td">{server.name}</div>
            <div className="table__td">{server.distance} km</div>
          </div>
        )) }
      </div>
    ) : '';

    return (
      <div className={`table ${className ? className : ''}`}>
        <div className="table__head">
          <div className="table__row container-fluid">
            <div className="table__th">Server</div>
            <div className="table__th">Distance</div>
          </div>
        </div>
        {tableBody}
      </div>
    );
  }

  public shouldComponentUpdate(): boolean {
    if (!!localStorage.getItem('apitoken')) {
      return true;
    }
    logout();
    return false;
  }

  public async componentDidMount() {
    const response = await apiGetServers();

    if (response.response) {
      console.error(response.response);
      alert(`Error ${response.response.status}: ${response.response.data.message}`);
      logout();
    } else {
      this.sortServers(response.data);
    }
  }

  private sortServers(servers: IServer[]) {
    sorting({
      array: servers,
      param: 'name',
      alphabetical: true
    });

    sorting({
      array: servers,
      param: 'distance',
    });

    this.setState({ servers });
  }
}

export default ServersTable;
