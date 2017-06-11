import * as ILogin from '../../common/component/login-form/reducer';
import * as IServerList from '../../common/component/server-list/reducer';

export interface IAppState {
	login: ILogin.State;
	serverList: IServerList.State;
}
