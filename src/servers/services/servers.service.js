import axiosProxy from '../../axiosProxy';

const getServers = () => axiosProxy.get(`/servers`);

export default {
    getServers,
};
