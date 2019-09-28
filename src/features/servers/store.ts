import { ServersService } from './services/servers.service';
import { runInAction, decorate, observable, action } from 'mobx';
import * as _ from 'lodash';
export interface IServerRecord {
	name: string;
	distance: number;
}

export class ServerListStore {
	public servers: IServerRecord[];
	public isFetchingServers: boolean;
	private serversService: ServersService;

	constructor() {
		this.servers = [];
		this.serversService = new ServersService();
		this.isFetchingServers = false;
	}

	public fethcServers = async () => {
		this.isFetchingServers = true;
		const results = await this.serversService.get();

		runInAction(() => {
			this.isFetchingServers = false;
			this.servers = _.sortBy(results, ['distance', 'name']);
		});
	};
}

decorate(ServerListStore, {
	servers: observable,
	fethcServers: action
})

const serverListStore = new ServerListStore();
export default serverListStore;
