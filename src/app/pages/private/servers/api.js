import restService from 'app/services/api';

export default {
    getServers: (configs) => restService.get('/servers', configs),
};
