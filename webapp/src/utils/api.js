import axios from 'axios';

export default {
  servers: {
    get: function() {
      return axios
        .get('http://playground.tesonet.lt/v1/servers', { headers: { 'Authorization': 'Bearer f9731b590611a5a9377fbd02f247fcdf' } })
        .then(({ data }) => data);
    }
  }
};
