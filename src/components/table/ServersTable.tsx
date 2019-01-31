import * as React from 'react';

const servers: any[] = Array(100).fill('').map(() => {
  return {
    name: 'Server name',
    distance: '1000 km'
  };
});

interface IServersTableProps {
  className?: string;
}

class ServersTable extends React.Component<IServersTableProps> {
  public render() {
    const { className } = this.props;

    const tableBody = (
      <div className="table__body">
        { servers.map((server: any, i: number) => (
          <div className="table__row container-fluid" key={i}>
            <div className="table__td">{server.name}</div>
            <div className="table__td">{server.distance}</div>
          </div>
        )) }
      </div>
    );

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
}

export default ServersTable;
