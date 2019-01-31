import * as React from 'react';
import { IClassName, IServersTableState, IServer } from '../../interfaces';
import logout from '../../utils/logout';
import { apiGetServers } from '../../api';

class ServersTable extends React.Component<IClassName, IServersTableState> {
  constructor(props: IClassName) {
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
            <div className="table__td">{server.distance}</div>
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
      this.setState({
        servers: response.data.sort((a: IServer, b: IServer) => {
          const an: string = a.name.toUpperCase();
          const bn: string = b.name.toUpperCase();

          return (an < bn) ? -1 : (an > bn) ? 1 : 0;
        }).sort((a: IServer, b: IServer) => {
          const ad: number = a.distance;
          const bd: number = b.distance;

          return (ad < bd) ? -1 : (ad > bd) ? 1 : 0;
        })
      });
    }
  }
}

export default ServersTable;
