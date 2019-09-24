import { ServersService } from './services/servers.service';
import { runInAction, decorate, observable, action } from 'mobx';

export interface IServerRecord {
	name: string;
	distance: number;
}

export class ServerListStore {
	public servers: IServerRecord[] | null;
	public isFetchingServers: boolean;
	private serversService: ServersService;

	constructor() {
		this.servers = null;
		this.serversService = new ServersService();
		this.isFetchingServers = false;
	}

	public fethcServers = async () => {
		this.isFetchingServers = true;
		const results = await this.serversService.get();

		runInAction(() => {
			this.isFetchingServers = false;
			this.servers = results;
		});
	};
}

decorate(ServerListStore, {
	servers: observable,
	fethcServers: action
})

const serverListStore = new ServerListStore();
export default serverListStore;
