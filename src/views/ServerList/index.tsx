import * as React from 'react';
import {useEffect} from 'react';
import * as css from './styles/ServerList.scss';
import {serverListService} from './services/serverListService';
import {authService} from '../../services/authService';
import logo from './styles/assets/logo-small.png';
import {useSelector} from 'react-redux';
import {IReduxState} from '../../reducers';
import {IServer} from './actions/serverListActions';
import {classNames} from '../../utils/utils';

export const ServerList: React.FC = () => {
  // Get server list on component mount
  useEffect(() => {
    serverListService.getServers();
  }, []);

  // Access server list from redux state
  const servers = useSelector<IReduxState, Array<IServer>>(state => state.servers);

  return (
    <div className={css['container']}>
      <div className={css['header']}>
        <img
          className={css['header__logo']}
          src={logo}
          alt='Testio logo'
        />
        <button
          className={css['header__logout']}
          onClick={authService.logout}
        >
          Logout
        </button>
      </div>
      <div></div>
      <div
        className={classNames(
          css['list__row'],
          css['list__row--dark']
        )}
      >
        <span>Server</span>
        <span>Distance</span>
      </div>
      <div className={css['list']}>
        {
          servers.map((server, index) => (
            <div
              // Using index as key, because names could be duplicated and there's no id field in server objects
              key={index}
              className={css['list__row']}
            >
              <span>{server.name}</span>
              <span>{server.distance} km</span>
            </div>
          ))
        }
      </div>
    </div>
  );
};
