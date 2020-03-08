import {authService} from '../../../services/authService';
import {store} from '../../../store';
import {setServerList} from '../actions/serverListActions';

class ServerListService {
  public getServers = async () => {
    const response = await fetch(
      'http://playground.tesonet.lt/v1/servers',
      {
        headers: {
          'Authorization': `Bearer ${authService.getUserToken()}`
        }
      }
    );
    store.dispatch(setServerList(await response.json()));
  }
}

export const serverListService = new ServerListService();
