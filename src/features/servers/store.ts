import * as _ from 'lodash';
import {
	action,
	decorate,
	observable,
	runInAction
} from 'mobx';
import { ServersService } from './services/servers.service';
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
			this.servers = _.sortBy(results, ['name']);
		});
	}
}

decorate(ServerListStore, {
	servers: observable,
	fethcServers: action,
	isFetchingServers: observable
});

export const serverListStore = new ServerListStore();
