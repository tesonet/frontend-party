import * as React from 'react';
import Logo from '../../components/common/Logo';
import LogoutButton from '../../components/common/LogoutButton';
import ServersTable from '../../components/table/ServersTable';
import './index.scss';

class List extends React.Component {
  public render() {
    return (
      <div className="list">
        <div className="list__header container-fluid">
          <Logo className="list__logo"/>
          <LogoutButton>Logout</LogoutButton>
        </div>
        <ServersTable className="list__table"/>
      </div>
    );
  }
}

export default List;
