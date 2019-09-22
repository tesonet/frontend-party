class ServerListStore {
    public servers: [] | null;

    constructor() {
        this.servers = null;
    }
}

const serverListStore = new ServerListStore();
export default serverListStore;
