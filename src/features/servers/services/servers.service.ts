import { API_URL, LOCAL_STORAGE_TOKEN } from 'common/constants/api.config';
import { IServerRecord } from '../store';

export class ServersService {
    public async get(): Promise<IServerRecord[]> {
        const token = await localStorage.getItem(LOCAL_STORAGE_TOKEN);
        console.log(token);
        const response = await fetch(`${API_URL}servers`, this.getFetchParams(token));

        return response.json();
    };

    private getFetchParams(token: any) {
        return {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        }
    }
}

