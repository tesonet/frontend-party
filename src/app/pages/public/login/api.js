import restService from 'app/services/api';

export default {
    login: (credentials) => restService.post('tokens', credentials),
};
