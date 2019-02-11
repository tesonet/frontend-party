import * as React from 'react';
import Logo from '../../components/common/Logo';
import LogoutButton from '../../components/common/LogoutButton';
import ServersTable from '../../components/table/ServersTable';
// @ts-ignore
import * as style from './index.scss';

class List extends React.Component {
  public render() {
    return (
      <div className={style.list}>
        <div className={`${style.list__header} list__header container-fluid`}>
          <Logo className={style.list__logo}/>
          <LogoutButton>Logout</LogoutButton>
        </div>
        <ServersTable className={`${style.list__table} list__table`}/>
      </div>
    );
  }
}

export default List;
