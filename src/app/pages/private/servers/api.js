import restService from 'app/services/api';

export default {
    getServers: () => restService.get('/servers'),
};
