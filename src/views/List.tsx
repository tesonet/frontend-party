import * as React from 'react';

const servers: any[] = Array(100).fill('').map(() => {
  return {
    name: 'Server name',
    distance: '1000 km'
  };
});

// tslint:disable-next-line
const logoutIcon = (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M3027,54l-4,4,4,4V59h6V57h-6V54Zm11,12h-9a0.945,0.945,0,0,1-1-1V62h2v2h7V52h-7v2h-2V51a0.945,0.945,0,0,1,1-1h9a0.945,0.945,0,0,1,1,1V65A0.945,0.945,0,0,1,3038,66Z" transform="translate(-3023 -50)"/></svg>);

class List extends React.Component {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div className="list">
        <div className="list__header container-fluid">
          <div className="list__logo logo logo--dark"></div>
          <button type="button" className="list__logout">{logoutIcon}Logout</button>
        </div>
        <div className="list__table table">
          <div className="table__head">
            <div className="table__row container-fluid">
              <div className="table__th">Server</div>
              <div className="table__th">Distance</div>
            </div>
          </div>
          <div className="table__body">
            { servers.map((server: any, i: number) => (
              <div className="table__row container-fluid" key={i}>
                <div className="table__td">{server.name}</div>
                <div className="table__td">{server.distance}</div>
              </div>
            )) }
          </div>
        </div>
      </div>
    );
  }
}

export default List;
